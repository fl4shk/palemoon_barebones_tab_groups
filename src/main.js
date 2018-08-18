"use strict";

function make_enum()
{
	let ret = {values : {}, names : []};
	for (let i in arguments)
	{
		ret.values[arguments[i]] = i;
		ret.names[i] = arguments[i];
	}

	ret.values = Object.freeze(ret.values);
	ret.names = Object.freeze(ret.names);

	return Object.freeze(ret);
}
