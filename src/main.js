"use strict";

function make_enum()
{
	let ret = {values : {}, list : []};
	for (let i in arguments)
	{
		ret.values[arguments[i]] = i;
		ret.list[i] = arguments[i];
	}

	ret.values = Object.freeze(ret.values);
	ret.list = Object.freeze(ret.list);

	return Object.freeze(ret);
}
