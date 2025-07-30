const fetch = require('node-fetch');
const log = {
  info: (msg) => `ℹ️  INFO: ${msg}`,
  success: (msg) => `✅ SUCCESS: ${msg}`,
  waiting: (msg) => `⏳ WAITING: ${msg}`,
  checking: (msg) => `🔍 CHECKING: ${msg}`,
  skip: (msg) => `⚠️  SKIP: ${msg}`,
  error: (msg) => `❌ ERROR: ${msg}`,
};

class GuerillaMailHelper {
  constructor() {
    this.apiBase = 'https://api.guerrillamail.com/ajax.php';
    this.emailAddr = null;
    this.sidToken = null;
  }

  async initEmail() {
    const url = `${this.apiBase}?f=get_email_address&lang=en`;
    const response = await fetch(url);
    const data = await response.json();

    if (!data.email_addr || !data.sid_token) {
      throw new Error('Failed to initialize Guerilla Mail session');
    }

    // Use @sharklasers.com for better compatibility
    this.emailAddr = data.email_addr.replace('@guerrillamailblock.com', '@sharklasers.com');
    this.sidToken = data.sid_token;

    console.log(log.info(`Generated new email address: ${this.emailAddr}`));
    console.log();
    return this.emailAddr;
  }

  async fetchVerificationCode(timeout = 60000, pollInterval = 5000) {
    if (!this.sidToken) {
      throw new Error('Session not initialized. Call initEmail() first.');
    }

    const startTime = Date.now();

    console.log(log.waiting('Waiting for verification code...'));
    console.log();

    while (Date.now() - startTime < timeout) {
      // Collect logs for this retry attempt
      const logs = [];

      logs.push(log.checking('Checking inbox for new emails...'));

      const url = `${this.apiBase}?f=check_email&seq=0&sid_token=${this.sidToken}`;
      const response = await fetch(url);
      const data = await response.json();

      if (data.list && data.list.length > 0) {
        logs.push(log.info(`Found ${data.list.length} email(s). Inspecting latest...`));
        for (const email of data.list) {
          const mailId = email.mail_id;

          // Fetch full email content using mail_id
          const fullEmailUrl = `${this.apiBase}?f=fetch_email&email_id=${mailId}&sid_token=${this.sidToken}`;
          const fullEmailResponse = await fetch(fullEmailUrl);
          const fullEmailData = await fullEmailResponse.json();

          const subject = fullEmailData.mail_subject || '';
          const body = fullEmailData.mail_body || '';

          logs.push(log.info(`Email Subject: ${subject}`));

          if (subject.includes('Welcome to Guerrilla Mail')) {
            // logs.push(log.skip('Skipping Guerrilla Mail welcome email.'));
            logs.push(log.skip('Skipping Welcome email.'));
            continue;
          }

          const match = body.match(/\b(\d{6})\b/) || subject.match(/\b(\d{6})\b/);
          if (match) {
            logs.push(log.success(`Verification code found: ${match[1]}`));

            // Print all collected logs for this retry together
            console.log(logs.join('\n'));
            console.log();

            return match[1];
          } else {
            logs.push(log.info('Verification code not found in this email.'));
          }
        }
      } else {
        logs.push(log.waiting('No new emails yet, waiting...'));
      }

      // Print all collected logs for this retry together, then blank line
      console.log(logs.join('\n'));
      console.log();

      await new Promise(r => setTimeout(r, pollInterval));
    }

    console.error(log.error('Timeout: Verification code not received within time limit'));
    console.log();
    throw new Error('Timeout: Verification code not received within time limit');
  }
}

// Self-test if run directly
if (require.main === module) {
  (async () => {
    try {
      const gm = new GuerillaMailHelper();
      await gm.initEmail();
      const code = await gm.fetchVerificationCode();
      console.log('🎯 Verification code:', code);
    } catch (error) {
      console.error('❌ Error:', error.message);
    }
  })();
}

module.exports = GuerillaMailHelper;
