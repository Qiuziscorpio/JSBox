/**
 * Created by Keen on 2015/11/11.
 */

/*�ַ�����trim����*/
String.prototype.trim = function () {
    return this.replace(/(^\s*)|(\s*$)/g, "");
};

/*�ַ����ĳ��ȣ�˫�ֽ��ַ����ȼ�Ϊ2*/
String.prototype.len = function () {
    return this.replace(/[^\x00-\xff]/g, "aa").length;
};

String.prototype.getRomdanCode = function () {
    return ("" + Math.random()).replace(/\D/g, "");
};