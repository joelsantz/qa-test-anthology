
class CourseContentPage {
    private get testCard() { return $('h4*=test-felipe'); }
    private get addContentButton () { return $('button*=Add Content'); }
    private get createOption () { return $('span*=Create'); }

    public async navigateToCourseContent() {
        await this.testCard.waitForDisplayed();
        await this.testCard.waitForClickable();
        await this.testCard.click();
        await browser.waitUntil(
            async () => (await browser.getUrl()).includes('/ultra/courses/_3_1/outline'),
            {
                timeout: 10000,
                timeoutMsg: 'Expected URL to change after clicking Courses'
            }
        );
    }

    public async addContent() {
        await this.addContentButton.waitForDisplayed();
        await this.addContentButton.waitForClickable();
        await this.addContentButton.click();

        await this.createOption.waitForDisplayed();
        await this.createOption.waitForClickable();
        await this.createOption.click();

        await browser.waitUntil(
            async () => (await browser.getUrl()).includes('/ultra/courses/_3_1/outline/create?parentId=_11_1&positionBefore=start'),
            {
                timeout: 10000,
                timeoutMsg: 'Expected URL to change after clicking Courses'
            }
        );
    }
}

export const courseContentPage = new CourseContentPage();