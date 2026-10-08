class employee{
    constructor(id,name,salary){
        this.id=id;
        this.name=name;
        this.salary=salary;
    }
    calculateSalary(){
        return this.salary;
    }

}
class Manager extends employee{
    constructor(id,name,salary,bonus){
        super(id,name,salary);
        this.bonus=bonus;
    }
    calculateSalary(){
        return this.salary+this.bonus;
    }
}