var tsToJs = {
    getElement: function Stirng(flag) {
        var plugin;
        if (flag == 1) {
            // console.log("人脸识别-----")
            if (location.href.indexOf('TakePhoto') == -1) {
                var plugin = document.getElementById("facePlugin");
                var data = "$=Action";
                var temp = plugin.SendDataToADB("127.0.0.1", 1352, 15000, data, data.length);
                // console.log(temp+"-----")
                //处理返回的结果，获取相应的属性

                if (typeof(temp) === "undefined") {
                    return "";
                }
                var str = temp.split("$");
                result = str[1].split("=#=")[1];
                // console.log(result+"-----");

                var name = str[2].split("=#=")[1];
                var sex = str[3].split("=#=")[1];
                var cardNo = str[4].split("=#=")[1];
                var address = str[5].split("=#=")[1];
                var birthday = str[6].split("=#=")[1];
                var cardImg = str[8].split("=#=")[1];
                var faceImg = str[9].split("=#=")[1];
                var race = str[10].split("=#=")[1];
                var regOrg = str[11].split("=#=")[1];
                var validTime = str[12].split("=#=")[1];
                var validTimeStart = validTime.split("-")[0];
                var validTimeEnd = validTime.split("-")[1];
                //处理身份证信息并赋值
                objSfz = {
                    "zjh": cardNo.toString(),
                    "xm": name.toString(),
                    "xb": sex.toString(),
                    "sr": birthday.toString(),
                    "mz": race.toString(),
                    "zz": address.toString(),
                    "qfjg": regOrg.toString(),
                    "yxqx": validTime.toString(),
                    "yxqx1": validTimeStart.toString(),
                    "yxqx2": validTimeEnd.toString(),
                    "zpString": cardImg.toString(),
                    "faceImg": faceImg.toString()
                }
                if (typeof(objSfz.zpString) != "undefined") {
                    document.getElementById('idcardphoto').src = "data:image/jpeg;base64," + objSfz.zpString;
                    // console.log(obj['身份证号']+ '._____.');
                }
                return objSfz;
            } else {
                return;
            }
        } else if (flag == 2) {
            // console.log("idcard");
            if (location.href.indexOf('TakePhoto') == -1) {
                plugin = document.getElementById('plugin');
                var temp2 = plugin.On_OpenDevice(1001);
                var obj = eval('(' + temp2 + ')');
                if (typeof(obj['照片']) != "undefined") {
                    document.getElementById('idcardphoto').src = "data:image/jpeg;base64," + obj['照片'];
                    // console.log(obj['身份证号']+ '._____.');
                    // console.log(obj['照片']+ '._____.-----------');
                }
                return obj;
            } else {
                return "";
            }
        } else if (flag == 3) {
            // console.log("idcard");
            if (location.href.indexOf('TakePhoto') == -1) {
                plugin = document.getElementById('plugin');
                var temp2 = plugin.On_OpenDevice(1001);
                var obj = eval('(' + temp2 + ')');
                return obj;
            } else {
                return "";
            }
        }
    },


    getExportInfo: function Stirng() {
        var columNameStr = '';
        var captionNameStr = '';
        $.ajaxSettings.async = false;
        $.get("assets/xml/Export.xml", false, function (d) {
            var columNameArray = [];
            var captionNameArray = [];
            $(d).find('ElementTable').each(function () {
                var $book = $(this);
                var ColumnName = $book.attr("ColumnName");
                var CaptionName = $book.attr("CaptionName");

                columNameArray.push(ColumnName);
                captionNameArray.push(CaptionName);
                // console.log(ColumnName + 'nei');
                // console.log(CaptionName + 'nei');
            });
            columNameStr = columNameArray.join(",");
            captionNameStr = captionNameArray.join(",");
            xmlxx = {
                "columNameStr": columNameStr,
                "captionNameStr": captionNameStr
            }
            // var url = commonPath+"/blacklist/exportExcel?1=1"+queryConfig;
            // var iframe = document.createElement('IFRAME');
            // iframe.setAttribute("id","testIframe");
            // iframe.setAttribute('style', 'position:absolute;width:0px;height:0px;left:-500px;top:-500px;');
            // document.body.appendChild(iframe);
            // iframe.src = url;

            // console.log(columNameStr+"&&"+captionNameStr);
        })
        $.ajaxSettings.async = true;
        return xmlxx;
    },

    getAreaData: function Stirng() {
        $.ajaxSettings.async = false;
        var nameArray = [];
        var dataBaseLinkArray = [];
        $.get('assets/xml/AreaData.xml', function (d) {
            $(d).find('ElementTable').each(function () {
                var $book = $(this);
                var value = $book.attr("tableName");
                var dataBaseLink = $book.children("DataBaseLink").attr("Name");
                nameArray.push(value);
                dataBaseLinkArray.push(dataBaseLink);
            });
            // loadTableList(1,true);
        });
        $.ajaxSettings.async = true;
        xmlxx = {
            "nameArray": nameArray,
            "dataBaseLinkArray": dataBaseLinkArray
        }
        return xmlxx;
    },


    getAreaTable: function () {
        $.ajaxSettings.async = false;
        var areaTable = [];
        $.get('assets/xml/AreaData.xml', function (d) {
            $(d).find('ElementTable').each(function () {
                var $book = $(this);
                var value = $book.attr("tableName");
                var dataBaseLink = $book.children("DataBaseLink").attr("Name");
                xmlxx = {
                    "tableName": value,
                    "dataBaseLink": dataBaseLink
                }
                areaTable.push(xmlxx);
            });
            // loadTableList(1,true);
        });
        $.ajaxSettings.async = true;
        return areaTable;
    },

    getPhoto: function (imgBase64) {
        document.getElementById('idcardphoto').src = "data:image/jpeg;base64," + imgBase64;
    },
    printImg: function (domId) {
        $('#' + domId).jqprint();
    }
};

(function ($) {
    var opt;
    $.fn.jqprint = function (options) {
        opt = $.extend({}, $.fn.jqprint.defaults, options);
        var $element = (this instanceof jQuery) ? this : $(this);
        var $iframe = $("<iframe  />");
        if (!opt.debug) {
            $iframe.css({position: "absolute", width: "0px", height: "0px", left: "-600px", top: "-600px"});
        }
        $iframe.appendTo("body");
        var doc = $iframe[0].contentWindow.document;
        if (opt.importCSS) {
            if ($("link[media=print]").length > 0) {
                $("link[media=print]").each(function () {
                    doc.write("<link type='text/css' rel='stylesheet' href='" + $(this).attr("href") + "' media='print' />");
                });
            }
            else {
                $("link").each(function () {
                    doc.write("<link type='text/css' rel='stylesheet' href='" + $(this).attr("href") + "' />");
                });
            }
        }

        if (opt.printContainer) {
            doc.write($element.outer());
        }
        else {
            $element.each(function () {
                doc.write($(this).html());
            });
        }

        doc.close();

        $iframe[0].contentWindow.focus();
        setTimeout(function () {
            $iframe[0].contentWindow.print();
        }, 1000);
    }

    $.fn.jqprint.defaults = {
        debug: false,
        importCSS: true,
        printContainer: true,
        operaSupport: true
    };

    // Thanks to 9__, found at http://users.livejournal.com/9__/380664.html
    jQuery.fn.outer = function () {
        return $($('<div></div>').html(this.clone())).html();
    }
})(jQuery);
