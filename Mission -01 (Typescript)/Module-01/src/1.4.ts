// Basic Data Type

//primitive types
//string
let firstName = 'Shamima'; //implicit data type (if we don't mention the type)
let lastName: string = 'Nasrin'; //explicit data type (if we mention the type)

//number
let age: number = 154;

//boolean
let isTrue: boolean = false;

//null
let nullValue: null = null;

//undefined
let undefinedValue: undefined = undefined;

//any type (if we don't mention the type that will become any type, we can assign anything to this type)
let anyValue;
anyValue = undefined;
anyValue = 123;
anyValue = true;

//non primitive types

//array
let friends: string[] = ['Monica', 'Ross']; //here we can only push string values
let roll: number[] = [10, 29]; //similarly here we can only push number values

//tuple
let studentInfo: [string, number, number] = ['Student one', 10, 170988909];