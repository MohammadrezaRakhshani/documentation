**Introduction:**
This plugin is a simple mapping plugin which uses concept map data in Terminology section of Wehub.


**Actions:**
For now the only action is **map field** which is getting a value in the input and provide mapped value based on concept map data in the output(default action). 


**Configurations:**
- concept_map_id: the ID of the chosen concept map data.
- input_name: since this plugin doesn't need any schema to work, and it only needs an input name to appear in designer this is the input field name.
- input_type: type of input value. 
available types: 1.Number 2.String 3.Boolean
- output_name: same as input name but for the output.
- output_type: type of output value
available types: 1.Number 2.String 3.Boolean
- map_direction: when the user creates a concept map, this concept map has a default direction which is mapping the keys to values, but we have the feature of mapping the values to keys, so the user must specify whether he/she wants to use it as it is(Default direction) or in reverse(Reversed direction).
Imagine you have the following concept map \{"red": 1, "blue": 2} if the map_direction value is set to DEFAULT you have to provide blue or red in the input and you'll get 1 or 2 in the output. but if it's REVERSED you have to provide 1 or 2 in the input and get red or blue in the output.
available options: 1.**DEFAULT** 2.**REVERSED**.