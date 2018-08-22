"use strict";

// For console.log
Cu.import("resource://gre/modules/Console.jsm");

function eek()
{
	console.log("Pale Moon Barebones Tab Groups:  Eek!");
}

function recursive_freeze(some_object)
{
	for (let key in some_object)
	{
		if (typeof some_object[key] === "object")
		{
			//console.log(`Calling recursive_freeze():  ${key}`);
			recursive_freeze(some_object[key]);
		}

		some_object[key] = Object.freeze(some_object[key]);
	}

	return Object.freeze(some_object);
}

function make_enum()
{
	const args = arguments;
	let ret = {values : {}, names : [], length : args.length};
	for (let i in args)
	{
		ret.values[args[i]] = i;
		ret.names[i] = args[i];
	}

	return recursive_freeze(ret);
}

function append_menuitem(label)
{
	let to_append = document.createElement("menuitem");
	to_append.setAttribute("label", label);
	this.appendChild(to_append);
}

function main()
{
	//alert("main():  Hello World!");
	let menupopup = document.getElementById("menupopup-binop");

	if (menupopup == null)
	{
		eek();
		return;
	}


	//for (let iter of menupopup.children)
	//{
	//	//console.log(iter.getAttribute("label"));
	//	if (iter.getAttribute("label") === "Divide")
	//	{
	//		//iter.setAttribute("label", "Eggs!");
	//		iter.remove();

	//	}
	//}

	//let to_append = document.createElement("menuitem");
	//to_append.setAttribute("label", "Eggs!");

	//menupopup.appendChild(to_append);
	menupopup.cstm_append = append_menuitem;

	menupopup.cstm_append("Eggs!");

}
