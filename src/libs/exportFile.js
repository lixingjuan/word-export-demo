export default function exportFile(url, params, method = 'post') {

  if (method === 'post') {
    var tempForm = document.createElement("form");
    tempForm.id = "tempForm1";
    tempForm.method = "post";
    tempForm.action = process.env.API_SERVER + url;
    tempForm.target = "_blank"; //打开新页面

    Object.keys(params || {}).map((key, i) => {
      var hideInput = document.createElement("input");
      hideInput.type = "hidden";
      hideInput.name = key; //后台要接受这个参数来取值
      hideInput.value = params[key]; //后台实际取到的值

      tempForm.appendChild(hideInput);
    })


    if (document.all) {
      tempForm.attachEvent("onsubmit", function () { });        //IE
    } else {
      var subObj = tempForm.addEventListener("submit", function () { }, false);    //firefox
    }
    document.body.appendChild(tempForm);
    if (document.all) {
      tempForm.fireEvent("onsubmit");
    } else {
      tempForm.dispatchEvent(new Event("submit"));
    }
    tempForm.submit();
    document.body.removeChild(tempForm);
  }
  else {
    window.open(url)
  }
}