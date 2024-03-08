import { courseContentPage } from "../pages/CourseContentPage";
import { coursesPage } from "../pages/CoursesPage";
import { createTestPage } from "../pages/CreateTestPage";
import { loginPage } from "../pages/LoginPage";


describe('Create Test in Ultra Course', () => {
  // Test case: Verify an instructor can create and save a test successfully
  it('Should allow an instructor to create and save a test', async () => {

    // Open the login page and log in as an instructor
    await loginPage.open();
    await loginPage.agree();
    await loginPage.login('instructor', 'changeme');

    // Navigate to the courses page
    await coursesPage.navigateToCoursesPage();

    await courseContentPage.navigateToCourseContent();
    await courseContentPage.addContent();

    // Create a new test, set the title and verify it is set correctly
    await createTestPage.navigateToCreateTestPage();
    await createTestPage.setTitle('Test Felipe');
    expect(await createTestPage.getTitleValue()).toBe('Test Felipe');

    // Add a new true/false question with automated feedback
    await createTestPage.addTrueFalseQuestion();
    await createTestPage.setQuestion('Is this my first question?');
    await createTestPage.setAutomatedFeedback();

    // Verify labels for correct and incorrect feedback are displayed
    expect(await browser.$('label*=CORRECT ANSWER FEEDBACK').isDisplayed()).toBe(true);
    expect(await browser.$('label*=INCORRECT ANSWER FEEDBACK').isDisplayed()).toBe(true);

    await createTestPage.setCorrectAnswerFeedback('True');
    await createTestPage.setIncorrectAnswerFeedback('False');

    // Save the test and verify it was created successfully
    await createTestPage.save();

    // Wait for 5 seconds to see the test created
    await browser.pause(5000);
    
    expect(await browser.$('h2*=Test Content').isDisplayed()).toBe(true);
    expect(await browser.$('h3*=Question 1').isDisplayed()).toBe(true);
    expect(await browser.$('span*=Correct answer').isDisplayed()).toBe(true);


  });
});