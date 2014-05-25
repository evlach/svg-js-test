var svgtest = {
	init: function(){
		this.svgCanvas = $('#'+this.config.canvasId);
		this.svgCanvas.width(this.config.canvasSize);
		this.svgCanvas.height(this.config.canvasSize);
		this.svgCanvas.svg({onLoad: this.drawInitial});
	},
	drawInitial: function(){
		svgtest.svg = svgtest.svgCanvas.svg('get');
		var svg = svgtest.svg;
		var size = svgtest.config.canvasSize/3;
		svgtest.addRect("A", 0, 0, size);
		svgtest.addRect("B", size, 0, size);
		svgtest.addRect("C", 2*size, 0, size);
		
		svgtest.addRect("D", 0, size, size);
		svgtest.addRect("E", size, size, size);
		svgtest.addRect("F", 2*size, size, size);
		
		svgtest.addRect("G", 0, 2*size, size);
		svgtest.addRect("H", size, 2*size, size);
		svgtest.addRect("I", 2*size, 2*size, size);
	},
	addRect:function(id,x,y,size){
		var svg = svgtest.svgCanvas.svg('get');
		var group = svg.group(a, id+"_group", null); 
		var params = svgtest.config.rectConfig;
		params.id=id;
		svgtest.rects[id] = svg.rect(group,x, y, size, size, params);
		$("#"+id).bind('click', function(){
			svgtest.resizeRect(id);
		});
		var textgap = size/2;
		var a = svg.text(group, x+textgap, y+textgap, this.rectMsgs[id].label);

	},
	resizeRect:function(id){
		var width = window.prompt("give Width");
		var height = window.prompt("give Heigth");
		var svg = svgtest.svgCanvas.svg('get');
		//svg.change(svgtest.rects[id], {x:10})
		
		$(svgtest.rects[id]).animate(
			{
				svgWidth: width, 
				svgHeight: height,
				//svgX:10,
				//svgY
				//svgStroke: 'aqua', 
				//svgStrokeWidth: '+=7', 
				//svgTransform: 'rotate(60, 100, 75)'
			}, 
			800);
	},
	clear: function(){
		this.svgCanvas.svg('get').clear();
	},
	exportSVG: function(){
		var xml = $('#canvas').svg('get').toSVG();
		$('#svgexport').html(xml.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'));
	},
	
	config:{
		canvasId:"canvas",
		canvasSize: 500,
		rectConfig:{
			fill: "green", 
			stroke: "black",	
			'stroke-width': 1
		},
		textConfig:{

		}
	},
	rects:[],
	svg:null,
	svgCanvas:null,
	rectMsgs:{
		A:{
			label: "A",
			q:""
		},
		B:{
			label: "B",
			q:""
		},
		C:{
			label: "C",
			q:""
		},
		D:{
			label: "D",
			q:""
		},
		E:{
			label: "E",
			q:""
		},
		F:{
			label: "F",
			q:""
		},
		G:{
			label: "G",
			q:""
		},
		H:{
			label: "H",
			q:""
		},
		I:{
			label: "I",
			q:""
		}
	}
};
