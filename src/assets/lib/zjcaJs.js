window._zjcaCMT = null;

var zjcaJs = {
    _certInfoArray: null,
    g_ZJCAClientVer: '1.0.0.0',
    _certUsage: 1,
    applicationUser: null,
    applicationUserKey: null,
    getApplication: function () {
        return {user: this.applicationUser, userKey: this.applicationUserKey};
    },
    isIE: function () {
        if (!!window.ActiveXObject || "ActiveXObject" in window) {
            return true;
        }
        else {
            return false;
        }
    },
    initCAClient: function () {
        if (window._zjcaCMT) return;
        try {
            var versionObj = new ActiveXObject("ZJCAKeyManagerSF.ZJCAVersion.1");
            this.g_ZJCAClientVer = versionObj.GetVersion();
        } catch (e) {
            this.g_ZJCAClientVer = "1.0.0.0";
        }
        window._zjcaCMT = new this.zjca_COM(this.onErrorCallbackFunc, this.onKeyEventCallbackFunc);
        try {
            window._zjcaCMT.init();
            var certArrary = window._zjcaCMT.getCertList(-1, 0, this._certUsage);
            this.FillCertInfoList(certArrary);
        } catch (e) {
            this.onErrorCallbackFunc(e.number, e.description);
        }
    },
    FillCertInfoList: function (certInfos) {
        this.applicationUserKey = certInfos[0].getSN();
        this.applicationUser = certInfos[0].getSubjectCN();
    },
    onErrorCallbackFunc: function (name, code, message) {
        var errCode = 0;
        if (code < 0) {
            var errNumber = 0x100000000;
            errNumber += parseInt(code);
            errCode = errNumber.toString(16);
        }
        else {
            var errNumber = parseInt(code);
            errCode = errNumber.toString(16);
        }
        var errMsg = "操作失败！\n错误代码：0x";
        errMsg += errCode;
        errMsg += "\n";
        errMsg += "错误信息：";
        errMsg += message;
        alert(errMsg);
    },
    onKeyEventCallbackFunc: function (type, index, name) {
        if (window._zjcaCMT) {
            //枚举所有签名证书
            var certArrary = window._zjcaCMT.getCertList(-1, 0, this._certUsage);
            // 如果结果同步返回，则显示结果
            if (typeof(certArrary) != "undefined") {
                this.FillCertInfoList(certArrary);
            }
            else {
                loading();
            }
        }
    },
    zjca_COM: function (errCallback, eventCallback) {
        var _deviceEnum = null;
        var _onError = errCallback;
        var _onKeyEvent = eventCallback;


        /*
         *	设备事件响应函数
         */
        function OnKeyChanged(name, index, type) {
            if (_onKeyEvent != null) {
                _onKeyEvent(type, index, name);
            }
        }

        /*
         *	初始化函数，请在页面加载时调用
         */
        this.init = function () {
            this.finaled();
            _deviceEnum = new ActiveXObject("ZJCAKeyManagerSF.ZJCADeviceEnum.1");
            _deviceEnum.AddHandler(OnKeyChanged);
        }
        /*
         *	结束函数，请在页面关闭前调用
         */
        this.finaled = function () {
            if (_deviceEnum) {
                _deviceEnum.RemoveHandler(OnKeyChanged);
                _deviceEnum = null;
            }
        }

        /*
         *	获取所有证书信息列表
         */
        this.getCertList = function (keyIndex, type, usage) {
            var certIndex = 0;
            var certArray = new Array;
            var keyObj = new ActiveXObject("ZJCAKeyManagerSF.ZJCADevice.1");
            var cert = new ActiveXObject("ZJCAKeyManagerSF.ZJCACertificate.1");

            // 通过RSA设备获取所有证书
            _deviceEnum.EnumDevices(2, 0);	//为兼容老版本的客户端的需要
            var keyCnt = _deviceEnum.Count;
            for (i = 0; i < keyCnt; i++) {
                if ((-1 != keyIndex) && (i != keyIndex)) {
                    continue;
                }
                _deviceEnum.get_Item(i, keyObj);

                var certCnt = keyObj.CertificateCount;
                for (var index = 0; index < certCnt; index++) {
                    keyObj.get_Certificate(index, cert);
                    if ((0 != type) && (cert.KeyType != type)) {
                        continue;
                    }
                    if ((0 != usage) && (cert.KeyUsage != usage)) {
                        continue;
                    }

                    var certInfo = new zjca_Cert(certIndex++,		//总序号
                        cert.SN,       	//SN
                        cert.KeyType,  	//Alg
                        cert.KeyUsage, 	//Usage
                        cert.Subject,  	//DN
                        cert.Issuer,   	//Issuer
                        cert.ValidFrom,	//起始时间
                        cert.ValidUntil,	//失效时间
                        i         			//所在KEY的序号
                    );
                    certArray.push(certInfo);
                }
            }

            return certArray;
        }
    }
}


var zjca_Cert = function (index, sn, alg, usage, dn, issuer, from, until, key_index) {
    var _sn = sn;
    var _dn = dn;

    this.getSN = function () {
        return _sn;
    }
    this.getSubjectCN = function () {
        var cn = "";
        var start = _dn.indexOf('CN=');
        var end = _dn.indexOf(',', start);
        if (-1 == end) {
            end = _dn.length;
        }
        if (start > 0 && end > start) {
            cn = _dn.substring(start + 3, end);
        }
        return cn;
    }
}
