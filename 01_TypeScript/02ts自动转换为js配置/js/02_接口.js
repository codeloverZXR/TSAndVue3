// 接口：是一种能力，一种约束而已
(() => {
    //输出姓名
    function showFullName(person) {
        return person.firstName + '_' + person.lastName;
    }
    // 定义一个对象
    const person = {
        firstName: '张',
        lastName: '欣睿'
    };
    console.log(showFullName(person));
})();
