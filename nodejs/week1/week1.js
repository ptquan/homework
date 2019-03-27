class Person {
		// class declaration.
		constructor(name, age){
			this.name = name;
			this.age = age;
		}	
	// method
	addPhone(number){
		this.number = number;
	};
	call(){
		if(this.name = true) {
			return `Calling ${this.name} at ${this.number}`
		}else{
			return `${this.name}  has no phone number saved.`
		}
	};
	birthday(){
		return `Wishing ${this.name} a happy ${this.age}th birthday!`
	}
};

let jimmy = new Person("Jimmy", 28);

jimmy.addPhone("55551234");

jimmy.call();
// should say "Calling Jimmy at 55551234..."

jimmy.birthday();
// should say "Wishing Jimmy a happy 29th birthday!"

let jill = new Person("Jill");

jill.call();

function newFunction() {
	this.number = number;
}
// should say "Jill has no phone number saved."