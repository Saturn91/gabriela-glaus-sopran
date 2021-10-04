import { PromptButton } from "../models/promptBtn.modle";

const promtContainerID = 'promptContainer';
const promtContainerMsgId = 'promptContainert-msg';
const promtContainerTitleId = 'promptContainert-title';
const promptContainertBtn1Id = 'promptContainert-btn1';
const promptContainertBtn2Id = 'promptContainert-btn2';
const promptContainertBtn3Id = 'promptContainert-btn3';

function setButton(button, buttonId) {
    const buttonElement = document.getElementById(buttonId);
    if(!button) {
        buttonElement.style.display = 'none';
        return;
    }
    buttonElement.innerText = button.text;
    buttonElement.style.display = 'inline';
    buttonElement.onclick = () => {button.callback()};
}

export function showPrompt(msg, title, button1, button2, button3) {
    if(!button1) button1 = new PromptButton('Close', () => hidePrompt());
    setButton(button1, promptContainertBtn1Id);
    setButton(button2, promptContainertBtn2Id);
    setButton(button3, promptContainertBtn3Id);

    const promt = document.getElementById(promtContainerID);
    promt.style.display = 'flex';
    const msgDisplay = document.getElementById(promtContainerMsgId);
    msgDisplay.innerText = msg;
    if(title) {
        const titleDispaly = document.getElementById(promtContainerTitleId);
        titleDispaly.innerText = title;
    }      
}

export function showYesNowPrompt(msg, title, callbackOnYes, callbackOnNo) {
    showPrompt(msg, title, new PromptButton('Yes', callbackOnYes), new PromptButton('No', callbackOnNo));
}

export function hidePrompt() {
    const promt = document.getElementById(promtContainerID);
    promt.style.display = 'none';
}