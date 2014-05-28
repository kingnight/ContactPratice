#  要点说明

## 1 异步串行方式使用contact.save API
由于contact.save API 为异步API，所以当需要导入多个联系人对象时，需要采用异步串行方式，即在每次contact.save成功或失败的回调函数中出发下一次导入，不能采用for循环方式，并发执行，将会导致错误。

## 2 创建createContact对象时需要避免创建非空字段
在iOS平台，非空字段可以被接受，在android平台，部分手机不能接受，导入完成后会引起通讯录crash
