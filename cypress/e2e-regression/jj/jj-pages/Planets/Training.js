export class Training {

    open() {
        cy.openPlanet('Training')
    }
    getColumnID() {
        return '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Transcript_A||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/header/headerButton[fieldName=training_custom_course_code]/'
    }
    checkMultiChoicePickerColumns(names) {
        names.forEach((text) => {
            cy.wait(500);
            cy.getSC(
                '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Transcript_A||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/filterEditor/editRowForm/item[title=' + encodeURI(text) + '||Class=SetFilterItem]/[icon="picker"]'
            ).click({ force: true });

            this.clickAnywhereElse();
        });
    }
    clickAnywhereElse() {
        cy.wait(200)
        cy.get('body').trigger('keydown', { keyCode: 27 });
        cy.wait(200);
        cy.get('body').trigger('keyup', { keyCode: 27 });
    }

    checkMainNouns(nouns) {
        nouns.forEach((noun) => {
            cy.get('td.multiLayoutButtonTabBootStrapScreenSelected[align="center"],td.multiLayoutButtonTabBootStrapScreen[align="center"]').contains(noun).should('be.visible')
        })
    }
}