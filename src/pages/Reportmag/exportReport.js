import {saveAs} from "file-saver";

const mhtml={
    top: "<!DOCTYPE html>\n<html xmlns:o=\"urn:schemas-microsoft-com:office:office\"\n" +
    "      xmlns:w=\"urn:schemas-microsoft-com:office:word\"\n" +
    "      xmlns:dt=\"uuid:C2F41010-65B3-11d1-A29F-00AA00C14882\"\n" +
    "      xmlns=\"http://www.w3.org/TR/REC-html40\">\n_html_</html>",
    head: "<head>\n<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\">\n<style>\n_styles_\n</style>\n</head>\n",
    body: "<body>_body_</body>"
}

export const exportReport=(styles,html,reportName)=>{
    let fileContent = mhtml.top.replace("_html_", mhtml.head.replace("_styles_", styles)+
        mhtml.body.replace("_body_",html));
    let blob = new Blob([fileContent], { type: "application/msword;charset=utf-8" });
    saveAs(blob, reportName+".doc");
}


export const createScanObj=()=>{
    let scanObj=document.createElement("scan");
    let brObj=document.createElement("br");
    brObj.setAttribute('style','page-break-before:always;mso-break-type:section-break');
    scanObj.appendChild(brObj);
    return scanObj;
}