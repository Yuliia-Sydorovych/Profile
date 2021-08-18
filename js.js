function Check()
{
  var element = document.getElementById("over");

  if(document.getElementById("check_element").checked)
  {
    element.style.display = "none";
  }
  else
  {
    element.style.display = "block";
  }			
  
}

var input = document.getElementsByTagName("input");

(function() {

	input[0].oninvalid = function(event)
	{
		input[0].style.background = "red";
	}

	input[0].addEventListener('invalid', function(event)
	{
		event.preventDefault();
		if(!event.target.validity.valid)
		{
			input[0].style.background = "red";
		}
	});

	input[0].addEventListener('input', function(event)
	{
		if (input[0].style.background == "red")
		{
			input[0].style.background = "transparent";
		}
	});
	
	
})();

(function()
{
	input[1].oninvalid = function(event)
	{
		input[1].style.background = "red";
	}

	input[1].addEventListener('invalid', function(event)
	{
		event.preventDefault();
		if(!event.target.validity.valid)
		{
			input[1].style.background = "red";
		}
	});

	input[1].addEventListener('input', function(event)
	{
		if (input[1].style.background == "red")
		{
			input[1].style.background = "transparent";
		}
	});


})();

(function()
{
	input[2].oninvalid = function(event)
	{
		input[2].style.background = "red";
	}

	input[2].addEventListener('invalid', function(event)
	{
		event.preventDefault();
		if(!event.target.validity.valid)
		{
			input[2].style.background = "red";
		}
	});

	input[2].addEventListener('input', function(event)
	{
		if (input[2].style.background == "red")
		{
			input[2].style.background = "transparent";
		}
	});


})();
(function()
{
	input[3].oninvalid = function(event)
	{
		input[3].style.background = "red";
	}

	input[3].addEventListener('invalid', function(event)
	{
		event.preventDefault();
		if(!event.target.validity.valid)
		{
			input[3].style.background = "red";
		}
	});

	input[3].addEventListener('input', function(event)
	{
		if (input[3].style.background == "red")
		{
			input[3].style.background = "transparent";
		}
	});


})();

(function()
{
	input[4] = document.getElementsByName("r");
	
	input.oninvalid = function(event)
	{
		input[4].style.background = "red";
	}

	input[4].addEventListener('invalid', function(event)
	{
		event.preventDefault();
		if(!event.target.validity.valid)
		{
			input[4].style.background = "red";
		}
	});

	input[4].addEventListener('input', function(event)
	{
		if (input[4].style.background == "red")
		{
			input[4].style.background = "transparent";
		}
	});


})();

(function()
{
	input[7] = document.getElementsByName("r");
	
	input.oninvalid = function(event)
	{
		input[7].style.background = "red";
	}

	input[7].addEventListener('invalid', function(event)
	{
		event.preventDefault();
		if(!event.target.validity.valid)
		{
			input[7].style.background = "red";
		}
	});

	input[7].addEventListener('input', function(event)
	{
		if (input[7].style.background == "red")
		{
			input[7].style.background = "transparent";
		}
	});


})();

(function()
{
	input[8] = document.getElementsByName("r");
	
	input.oninvalid = function(event)
	{
		input[8].style.background = "red";
	}

	input[8].addEventListener('invalid', function(event)
	{
		event.preventDefault();
		if(!event.target.validity.valid)
		{
			input[8].style.background = "red";
		}
	});

	input[8].addEventListener('input', function(event)
	{
		if (input[8].style.background == "red")
		{
			input[8].style.background = "transparent";
		}
	});


})();

(function()
{
	input[9] = document.getElementsByName("r");
	
	input.oninvalid = function(event)
	{
		input[9].style.background = "red";
	}

	input[9].addEventListener('invalid', function(event)
	{
		event.preventDefault();
		if(!event.target.validity.valid)
		{
			input[9].style.background = "red";
		}
	});

	input[9].addEventListener('input', function(event)
	{
		if (input[9].style.background == "red")
		{
			input[9].style.background = "transparent";
		}
	});


})();
(function()
{
	input[10] = document.getElementsByName("r");
	
	input.oninvalid = function(event)
	{
		input[10].style.background = "red";
	}

	input[10].addEventListener('invalid', function(event)
	{
		event.preventDefault();
		if(!event.target.validity.valid)
		{
			input[10].style.background = "red";
		}
	});

	input[10].addEventListener('input', function(event)
	{
		if (input[10].style.background == "red")
		{
			input[10].style.background = "transparent";
		}
	});


})();
(function()
{
	input[10] = document.getElementsByName("r");
	
	input.oninvalid = function(event)
	{
		input[10].style.background = "red";
	}

	input[10].addEventListener('invalid', function(event)
	{
		event.preventDefault();
		if(!event.target.validity.valid)
		{
			input[10].style.background = "red";
		}
	});

	input[10].addEventListener('input', function(event)
	{
		if (input[10].style.background == "red")
		{
			input[10].style.background = "transparent";
		}
	});


})();
(function()
{
	input[11] = document.getElementsByName("r");
	
	input.oninvalid = function(event)
	{
		input[11].style.background = "red";
	}

	input[11].addEventListener('invalid', function(event)
	{
		event.preventDefault();
		if(!event.target.validity.valid)
		{
			input[11].style.background = "red";
		}
	});

	input[11].addEventListener('input', function(event)
	{
		if (input[11].style.background == "red")
		{
			input[11].style.background = "transparent";
		}
	});

})();

(function()
{
	input[12] = document.getElementsByName("r");
	
	input.oninvalid = function(event)
	{
		input[12].style.background = "red";
	}

	input[12].addEventListener('invalid', function(event)
	{
		event.preventDefault();
		if(!event.target.validity.valid)
		{
			input[12].style.background = "red";
		}
	});

	input[12].addEventListener('input', function(event)
	{
		if (input[12].style.background == "red")
		{
			input[12].style.background = "transparent";
		}
	});

})();
(function()
{
	input[13] = document.getElementsByName("r");
	
	input.oninvalid = function(event)
	{
		input[13].style.background = "red";
	}

	input[13].addEventListener('invalid', function(event)
	{
		event.preventDefault();
		if(!event.target.validity.valid)
		{
			input[13].style.background = "red";
		}
	});

	input[13].addEventListener('input', function(event)
	{
		if (input[13].style.background == "red")
		{
			input[13].style.background = "transparent";
		}
	});

})();
(function()
{
	input[14] = document.getElementsByName("r");
	
	input.oninvalid = function(event)
	{
		input[14].style.background = "red";
	}

	input[14].addEventListener('invalid', function(event)
	{
		event.preventDefault();
		if(!event.target.validity.valid)
		{
			input[14].style.background = "red";
		}
	});

	input[14].addEventListener('input', function(event)
	{
		if (input[14].style.background == "red")
		{
			input[14].style.background = "transparent";
		}
	});

})();
(function()
{
	input[15] = document.getElementsByName("r");
	
	input.oninvalid = function(event)
	{
		input[15].style.background = "red";
	}

	input[15].addEventListener('invalid', function(event)
	{
		event.preventDefault();
		if(!event.target.validity.valid)
		{
			input[15].style.background = "red";
		}
	});

	input[15].addEventListener('input', function(event)
	{
		if (input[15].style.background == "red")
		{
			input[15].style.background = "transparent";
		}
	});

})();

(function()
{
	input[17] = document.getElementsByName("r");
	
	input.oninvalid = function(event)
	{
		input[17].style.background = "red";
	}

	input[17].addEventListener('invalid', function(event)
	{
		event.preventDefault();
		if(!event.target.validity.valid)
		{
			input[17].style.background = "red";
		}
	});

	input[17].addEventListener('input', function(event)
	{
		if (input[17].style.background == "red")
		{
			input[17].style.background = "transparent";
		}
	});

})();
(function()
{
	input[18] = document.getElementsByName("r");
	
	input.oninvalid = function(event)
	{
		input[18].style.background = "red";
	}

	input[18].addEventListener('invalid', function(event)
	{
		event.preventDefault();
		if(!event.target.validity.valid)
		{
			input[18].style.background = "red";
		}
	});

	input[18].addEventListener('input', function(event)
	{
		if (input[18].style.background == "red")
		{
			input[18].style.background = "transparent";
		}
	});

})();
(function()
{
	input[19] = document.getElementsByName("r");
	
	input.oninvalid = function(event)
	{
		input[19].style.background = "red";
	}

	input[19].addEventListener('invalid', function(event)
	{
		event.preventDefault();
		if(!event.target.validity.valid)
		{
			input[19].style.background = "red";
		}
	});

	input[19].addEventListener('input', function(event)
	{
		if (input[19].style.background == "red")
		{
			input[19].style.background = "transparent";
		}
	});

})();
(function()
{
	input[20] = document.getElementsByName("r");
	
	input.oninvalid = function(event)
	{
		input[20].style.background = "red";
	}

	input[20].addEventListener('invalid', function(event)
	{
		event.preventDefault();
		if(!event.target.validity.valid)
		{
			input[20].style.background = "red";
		}
	});

	input[20].addEventListener('input', function(event)
	{
		if (input[20].style.background == "red")
		{
			input[20].style.background = "transparent";
		}
	});

})();
(function()
{
	input[21] = document.getElementsByName("r");
	
	input.oninvalid = function(event)
	{
		input[21].style.background = "red";
	}

	input[21].addEventListener('invalid', function(event)
	{
		event.preventDefault();
		if(!event.target.validity.valid)
		{
			input[21].style.background = "red";
		}
	});

	input[21].addEventListener('input', function(event)
	{
		if (input[21].style.background == "red")
		{
			input[21].style.background = "transparent";
		}
	});

})();
(function()
{
	input[22] = document.getElementsByName("r");
	
	input.oninvalid = function(event)
	{
		input[22].style.background = "red";
	}

	input[22].addEventListener('invalid', function(event)
	{
		event.preventDefault();
		if(!event.target.validity.valid)
		{
			input[22].style.background = "red";
		}
	});

	input[22].addEventListener('input', function(event)
	{
		if (input[22].style.background == "red")
		{
			input[22].style.background = "transparent";
		}
	});

})();


(function()
{
	input[23] = document.getElementsByName("r");
	
	input.oninvalid = function(event)
	{
		input[23].style.background = "red";
	}

	input[23].addEventListener('invalid', function(event)
	{
		event.preventDefault();
		if(!event.target.validity.valid)
		{
			input[23].style.background = "red";
		}
	});

	input[23].addEventListener('input', function(event)
	{
		if (input[23].style.background == "red")
		{
			input[23].style.background = "transparent";
		}
	});

})();
(function()
{
	input[24] = document.getElementsByName("r");
	
	input.oninvalid = function(event)
	{
		input[24].style.background = "red";
	}

	input[24].addEventListener('invalid', function(event)
	{
		event.preventDefault();
		if(!event.target.validity.valid)
		{
			input[24].style.background = "red";
		}
	});

	input[24].addEventListener('input', function(event)
	{
		if (input[24].style.background == "red")
		{
			input[24].style.background = "transparent";
		}
	});

})();
(function()
{
	input[25] = document.getElementsByName("r");
	
	input.oninvalid = function(event)
	{
		input[25].style.background = "red";
	}

	input[25].addEventListener('invalid', function(event)
	{
		event.preventDefault();
		if(!event.target.validity.valid)
		{
			input[25].style.background = "red";
		}
	});

	input[25].addEventListener('input', function(event)
	{
		if (input[25].style.background == "red")
		{
			input[25].style.background = "transparent";
		}
	});

})();
(function()
{
	input[26] = document.getElementsByName("r");
	
	input.oninvalid = function(event)
	{
		input[26].style.background = "red";
	}

	input[26].addEventListener('invalid', function(event)
	{
		event.preventDefault();
		if(!event.target.validity.valid)
		{
			input[26].style.background = "red";
		}
	});

	input[26].addEventListener('input', function(event)
	{
		if (input[26].style.background == "red")
		{
			input[26].style.background = "transparent";
		}
	});

})();
(function()
{
	input[27] = document.getElementsByName("r");
	
	input.oninvalid = function(event)
	{
		input[27].style.background = "red";
	}

	input[27].addEventListener('invalid', function(event)
	{
		event.preventDefault();
		if(!event.target.validity.valid)
		{
			input[27].style.background = "red";
		}
	});

	input[27].addEventListener('input', function(event)
	{
		if (input[27].style.background == "red")
		{
			input[27].style.background = "transparent";
		}
	});

})();
(function()
{
	input[28] = document.getElementsByName("r");
	
	input.oninvalid = function(event)
	{
		input[28].style.background = "red";
	}

	input[28].addEventListener('invalid', function(event)
	{
		event.preventDefault();
		if(!event.target.validity.valid)
		{
			input[28].style.background = "red";
		}
	});

	input[28].addEventListener('input', function(event)
	{
		if (input[28].style.background == "red")
		{
			input[28].style.background = "transparent";
		}
	});

})();
(function()
{
	input[29] = document.getElementsByName("r");
	
	input.oninvalid = function(event)
	{
		input[29].style.background = "red";
	}

	input[29].addEventListener('invalid', function(event)
	{
		event.preventDefault();
		if(!event.target.validity.valid)
		{
			input[29].style.background = "red";
		}
	});

	input[29].addEventListener('input', function(event)
	{
		if (input[29].style.background == "red")
		{
			input[29].style.background = "transparent";
		}
	});

})();


(function()
{
	input[31] = document.getElementsByName("r");
	
	input.oninvalid = function(event)
	{
		input[31].style.background = "red";
	}

	input[31].addEventListener('invalid', function(event)
	{
		event.preventDefault();
		if(!event.target.validity.valid)
		{
			input[31].style.background = "red";
		}
	});

	input[31].addEventListener('input', function(event)
	{
		if (input[31].style.background == "red")
		{
			input[31].style.background = "transparent";
		}
	});

})();
(function()
{
	input[32] = document.getElementsByName("r");
	
	input.oninvalid = function(event)
	{
		input[32].style.background = "red";
	}

	input[32].addEventListener('invalid', function(event)
	{
		event.preventDefault();
		if(!event.target.validity.valid)
		{
			input[32].style.background = "red";
		}
	});

	input[32].addEventListener('input', function(event)
	{
		if (input[32].style.background == "red")
		{
			input[32].style.background = "transparent";
		}
	});

})();
(function()
{
	input[33] = document.getElementsByName("r");
	
	input.oninvalid = function(event)
	{
		input[33].style.background = "red";
	}

	input[33].addEventListener('invalid', function(event)
	{
		event.preventDefault();
		if(!event.target.validity.valid)
		{
			input[33].style.background = "red";
		}
	});

	input[33].addEventListener('input', function(event)
	{
		if (input[33].style.background == "red")
		{
			input[33].style.background = "transparent";
		}
	});

})();



console.log(input[38]);

(function()
{
	input[37] = document.getElementsByName("r");
	
	input.oninvalid = function(event)
	{
		input[37].style.background = "red";
	}

	input[37].addEventListener('invalid', function(event)
	{
		event.preventDefault();
		if(!event.target.validity.valid)
		{
			input[37].style.background = "red";
		}
	});

	input[37].addEventListener('input', function(event)
	{
		if (input[37].style.background == "red")
		{
			input[37].style.background = "transparent";
		}
	});
	
})();

(function()
{

	input[38] = document.getElementsByName("r");
	
	input.oninvalid = function(event)
	{
		input[38].style.background = "red";
	}

	input[38].addEventListener('invalid', function(event)
	{
		event.preventDefault();
		if(!event.target.validity.valid)
		{
			input[38].style.background = "red";
		}
	});

	input[38].addEventListener('input', function(event)
	{
		if (input[38].style.background == "red")
		{
			input[38].style.background = "transparent";
		}
	});

})();
(function()
{
	input[39] = document.getElementsByName("r");
	
	input.oninvalid = function(event)
	{
		input[39].style.background = "red";
	}

	input[39].addEventListener('invalid', function(event)
	{
		event.preventDefault();
		if(!event.target.validity.valid)
		{
			input[39].style.background = "red";
		}
	});

	input[39].addEventListener('input', function(event)
	{
		if (input[39].style.background == "red")
		{
			input[39].style.background = "transparent";
		}
	});
	
})();

