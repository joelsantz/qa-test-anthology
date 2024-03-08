
class CoursesPage {
    private get coursesLink() { return $('[analytics-id="courses.base.navigation.handleBase.link"]'); }
    
    public async navigateToCoursesPage() {
        await this.coursesLink.waitForDisplayed();
        await this.coursesLink.waitForClickable();
        await this.coursesLink.click();
        await browser.waitUntil(
            async () => (await browser.getUrl()).includes('/ultra/course'),
            {
                timeout: 10000,
                timeoutMsg: 'Expected URL to change after clicking Courses'
            }
        );
    }
  }

export const coursesPage = new CoursesPage();