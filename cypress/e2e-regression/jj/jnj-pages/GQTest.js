import { Menu } from "./Menu/Menu";
import { Planets } from "./Planets/Planets";
import { ElementLibrary } from "./ElementLibrary/ElementLibrary";
import { HamburgerMenu } from "./HamburgerMenu/HamburgerMenu";
const { SCHelper } = require("../../../../../playwright-sc-helper");

export class GQTest {
    constructor(page) {
        this.page = page;
        this.sc = new SCHelper(page);
        this.Planets = new Planets(page);
        this.ElementLibrary = new ElementLibrary(page);
        this.Menu = new Menu(page);
        this.HamburgerMenu = new HamburgerMenu(page);
    }

    async Logout() {
        // Click Hamburger icon
        await (await this.sc.getSC('//QMainPageBase[ID="MainPage"]/mainHeader/userMenu/')).click();
        await this.page.waitForTimeout(2000);
        await (await this.sc.getSC('//QMainPageBase[ID="MainPage"]/mainHeader/userMenu/')).click();

        // Click Log out
        const logoutBtn = await this.sc.getSC(
            '//QMainPageBase[ID="MainPage"]/child[Class=QCommandMenu||scClass=Menu||index=4||length=6||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1||roleIndex=0||roleLength=1||scRole=menu]/body/row[icon=logout.svg||itemName=Logout||8]/col[fieldName=itemName||1]'
        );
        await logoutBtn.click({ force: true });
    }

    async Login(role) {
        await this.page.goto('/'); // Uses baseURL from config

        const credentials = this.getCredentials(role);

        const userField = await this.sc.getSC('//autoID[Class=QCustomerIntroPage||scClass=VLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=Canvas||index=1||length=2||classIndex=1||classLength=2]/child[Class=LoginWindow||scClass=Window||index=1||length=5||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1||roleIndex=0||roleLength=1||title=Log%20in%20Required||scRole=dialog]/item[0][Class="DynamicForm"]/item[name=username||title=Username||index=1||Class=TextItem]/element');
        await userField.fill(credentials.username);

        const passField = await this.sc.getSC('//autoID[Class=QCustomerIntroPage||scClass=VLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=Canvas||index=1||length=2||classIndex=1||classLength=2]/child[Class=LoginWindow||scClass=Window||index=1||length=5||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1||roleIndex=0||roleLength=1||title=Log%20in%20Required||scRole=dialog]/item[0][Class="DynamicForm"]/item[name=password||title=Password||index=2||Class=PasswordItem]/element');
        await passField.fill(credentials.password);

        const submitBtn = await this.sc.getSC('//autoID[Class=QCustomerIntroPage||scClass=VLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/member[Class=Canvas||index=1||length=2||classIndex=1||classLength=2]/child[Class=LoginWindow||scClass=Window||index=1||length=5||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1||roleIndex=0||roleLength=1||title=Log%20in%20Required||scRole=dialog]/item[0][Class="DynamicForm"]/item[title=Submit||index=3||Class=ButtonItem]/button/');
        await submitBtn.click();

        // Wait for results
        await this.sc.waitForSCDone();
    }

    getCredentials(role) {
        // Read from cypress.env.json for parity or use process.env
        // Simplified for this migration:
        if (role) {
            // Find user by role (logic from commands.js)
            // For now returning defaults or env
            return {
                username: process.env.USERNAME,
                password: process.env.PASSWORD
            };
        }
        return {
            username: process.env.USERNAME,
            password: process.env.PASSWORD
        };
    }
}
