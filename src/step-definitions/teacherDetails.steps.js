const { When } = require('@cucumber/cucumber');
const { TeacherDetailsPage } = require('../pages/TeacherDetailsPage');

When('the applicant provides teacher details', async function (dataTable) {
  const data = dataTable.rowsHash();
  const teacherDetailsPage = new TeacherDetailsPage(this.page);

  await teacherDetailsPage.clickAddTeacherDetailsButton();
  await teacherDetailsPage.selectTeacherTitle(data.Title);
  await teacherDetailsPage.fillTeacherDetails(data);
  await teacherDetailsPage.clickCreateAddTeacherDetailsButton();
  await teacherDetailsPage.clickNextButton();
  await this.page.waitForLoadState('networkidle');
  await this.page.waitForTimeout(2000);
});
