		
		window.onload=function(){
			var container=document.getElementById('container');
			var list=document.getElementById('list');
			var buttons=document.getElementById('buttons').getElementsByTagName('span');
			var pre=document.getElementById('prev');
			var next=document.getElementById('next');
			var index=1;
			var animated=false;
			var timer;
			function showButton()
			{
				for(var i=0;i<buttons.length;i++)
				{
					if(buttons[i].className=='on')
					{
						buttons[i].className='';
						break;
					}
			 }
				buttons[index-1].className="on";
		}
			
		function animate(offset)
		{
			 animated=true;
			 var newleft=parseInt(list.style.left)+offset;
			 var time=300;//位移总时间
			 var interval=10;//位移间隔时间
			 var speed=offset/(time/interval);//每一次的位移量
			 
			 function go()
			 {
				 if((speed<0&&parseInt(list.style.left)>newleft)||(speed>0&&parseInt(list.style.left)<newleft))
				 {
					 list.style.left=parseInt(list.style.left)+speed+'px';
					 setTimeout(go,interval);
				 }
				 else
				 {
				 			 animated=false;
				 			 list.style.left=newleft+'px';
				          if(newleft>-1380)
				          {
				     					list.style.left=-6900+'px'; 
				          }
				         if(newleft<-6900)
				         {
				    				 list.style.left=-1380+'px'; 
				         }
				   }
			  }
			 go();
		}
		
		
		function play()
		{
			timer=setInterval(function()
			{
				next.onclick();
			},5000);
		}
		
		
			function stop()
			{
				clearInterval(timer);
			}
		 
		next.onclick=function()
		{
			if(index==5)
			{
				index=1;
			}
			else
			{
				index+=1;
			}
			showButton();
			if(animated==false)
			{
				animate(-1380);
			}
		}
		
		
		
		pre.onclick=function()
		{
			if(index==1)
			{
				index=5;
			}
			else
			{
			 index-=1;
			}
			showButton();
			if(animated==false)
			{
			   animate(1380);
			}
		}
		 
		for(var i=0;i<buttons.length;i++)
		{
			buttons[i].onclick=function()
			{
				if(this.className=='on')
				{
				return;
				}
				var myIndex=parseInt(this.getAttribute('index'));
				var offset=-1380*(myIndex-index);
				 
				index=myIndex;
				showButton();
				 if(animated==false)
				 {
					animate(offset);
				 }
			}
		 }
		 
		 container.onmouseover=stop;
		 container.onmouseout=play;
		 play();
		}
		
		
		//function validate_required(field,alerttxt)
		//{
		//with (field)
		//{
		//if (value==null||value=="")
		//  {alert(alerttxt);return false}
		//else {return true}
		//}
		//}
		//
		//function validate_form(thisform)
		//{
		//with (thisform)
		//{
		//if (validate_required(email,"Email must be filled out!")==false)
		//  {email.focus();return false}
		//}
		//}
		
