
class CreateTestPage {
    private get createTestLink() { return $('[analytics-id="course.content.test.create.link"]'); }
    private get titleInput() { return $('[name="panel-title"]'); }
    private get addQuestionButton() { return $('[data-analytics-id="assessmentCanvas.addQuestionButton.inlineAddButton.iconButton.button"]'); }
    private get addTrueFalseQuestionLink() { return $('span*=Add True/False question'); }
    private get questionEditorTextBox() { return $('[data-placeholder="Type Question 1 text"]'); }
    private get AutomatedFeedbackToggle() { return $('span*=Automated Feedback'); }
    private get saveButton() { return $('[data-analytics-id="assessments.canvas.editMode.question.save"]'); }

    
    public async navigateToCreateTestPage() {
        await this.createTestLink.waitForDisplayed();
        await this.createTestLink.waitForClickable();
        await this.createTestLink.click();
    }

    public async setTitle(title: string) {
        await this.titleInput.waitForDisplayed();
        await this.titleInput.setValue(title);
    }

    public async getTitleValue() {
        return await this.titleInput.getValue();
    }

    public async addTrueFalseQuestion() {
        await this.addQuestionButton.waitForDisplayed();
        await this.addQuestionButton.waitForClickable();
        await this.addQuestionButton.click();

        await this.addTrueFalseQuestionLink.waitForDisplayed();
        await this.addTrueFalseQuestionLink.waitForClickable();
        await this.addTrueFalseQuestionLink.click();
    }

    public async setQuestion(question: string) {
        await this.questionEditorTextBox.waitForDisplayed();
        await this.questionEditorTextBox.waitForClickable();
        await this.questionEditorTextBox.click();
        await browser.keys(question);
    }

    public async setAutomatedFeedback() {
        await this.AutomatedFeedbackToggle.waitForDisplayed();
        await this.AutomatedFeedbackToggle.waitForClickable();
        await this.AutomatedFeedbackToggle.click();
    }

    public async setCorrectAnswerFeedback(feedback: string) {
        const correctAnswerFeedbackEditorXPath = "//label[contains(., 'CORRECT ANSWER FEEDBACK')]/ancestor::div[contains(@class, 'js-automated-question-feedback-edit__correct-feedback')]//div[@contenteditable='true']";
        const editor = await $(correctAnswerFeedbackEditorXPath);
        await editor.waitForDisplayed();
        await editor.click();
        await browser.keys(feedback);
    }

    public async setIncorrectAnswerFeedback(feedback: string) {
        const incorrectAnswerFeedbackEditorXPath = "//label[contains(., 'INCORRECT ANSWER FEEDBACK')]/ancestor::div[contains(@class, 'js-automated-question-feedback-edit__incorrect-feedback')]//div[@contenteditable='true']";
        const editor = await $(incorrectAnswerFeedbackEditorXPath);
        await editor.waitForDisplayed();
        await editor.click();
        await browser.keys(feedback);
    }

    public async save() {
        await this.saveButton.waitForDisplayed();
        await this.saveButton.waitForClickable();
        await this.saveButton.click();
    }
    
}

export const createTestPage = new CreateTestPage();


