/**初始化*/
document
    .write("<script type=\"text\/javascript\" src=\"/assets/lodop/LodopFuncs.js?timestamp=\""+new Date().getTime()+"\"></script>");
document
    .write('<object id="LODOP_OB" classid="clsid:2105C259-1E0C-4534-8141-A753534CB4CA" width=0 height=0>  <embed id="LODOP_EM" type="application/x-print-lodop" width=0 height=0></embed> </object>');

var LODOP;
/**
 * 初始化
 * @returns {*}
 */
function initLoDop(){
    if(LODOP==null){
        LODOP=getLodop();
    }
    return LODOP;
}
/**
 * 检测是否安装LODOP控件
 * @constructor
 */
function CheckIsInstall() {
    try{
        var LODOP=getLodop();
        if (LODOP.VERSION) {
            if (LODOP.CVERSION)
                alert("当前有C-Lodop云打印可用!\n C-Lodop版本:"+LODOP.CVERSION+"(内含Lodop"+LODOP.VERSION+")");
            else
                alert("本机已成功安装了Lodop控件！\n 版本号:"+LODOP.VERSION);

        }
    }catch(err){
    }
}
/**
 * 打印HTML文本(目前暂时支持合同打印)
 * @param obj
 */
function printHTML(context,htbh) {
    initLoDop();
    var context=$('#'+context).html();
    var htbh=$('#'+htbh).text();
    var strStyleCSS = "<style>.line_div{border-bottom: 1px solid #000000;height: 20px;line-height: 20px;}</style>";
    var strFormHtml = strStyleCSS + "<body style='background-color:transparent;'>" + context + "</body>";
    strFormHtml = strFormHtml.replace(/word-spacing:2px;/g, "word-spacing:11px;");
    LODOP.ADD_PRINT_HTM("18mm", "20mm", "RightMargin:15mm", "BottomMargin:20mm","<!DOCTYPE html>" + "<meta http-equiv='X-UA-Compatible' content='IE=edge'>" + strFormHtml);
    LODOP.SET_SHOW_MODE("NP_NO_RESULT", true);
    LODOP.SET_SHOW_MODE("BKIMG_IN_PREVIEW", 0);
    LODOP.SET_SHOW_MODE("BKIMG_PRINT", 1);
    LODOP.SET_SHOW_MODE("BKIMG_LEFT", 0);
    LODOP.SET_SHOW_MODE("BKIMG_TOP", 0);
    //设置页脚
    LODOP.ADD_PRINT_HTM("435mm", "90mm", "25mm", "5.5mm", "<span tdata='pageNO'>第##页</span> <span tdata='pageCount'>共##页</span>");
    LODOP.SET_PRINT_STYLEA(0, "ItemType", 1);
    LODOP.SET_PRINT_STYLEA(0, "VOrient", 1);
    //二维码
    LODOP.ADD_PRINT_BARCODE("2.29mm", "179.6mm", "17.01mm", "17.01mm", "QRCode", htbh);
    LODOP.SET_PRINT_STYLEA(0, "QRCodeVersion", 3);
    LODOP.SET_PRINT_STYLEA(0, "ItemType", 1);
    LODOP.PREVIEW();
    //LODOP.PRINT_DESIGN();
}





