<html>
     <head>
        <title>Triangle's Area and Perimeter</title>
        <meta charset="UTF-8">
       
        <script type="text/javascript">
            
function Triangle(height , width , hypotenuse)
            {
                this.length = length;
                this.width = width;
                this.hypotenuse = hypotenuse;
                
function getPerimeter(length , width)
{
var hypotenuse = (length * length) + (width * width);
return perimTriangle = hypotenuse + length + width;
}
function getArea(length ,width)
{
return   1/2 (length * width);
}
function toString(){
                    return "The Triangle with sides = " + this.length + this.width + this.hypotenuse + " has Area = " + this.getArea() + " and Perimeter = " + this.getPerimeter();
}
   }        
           
function getAll(){

    var width = parseFloat(document.getElementById('width').value);
    var length =parseFloat(document.getElementById('length').value);
    var hypotenuse=parseFloat(document.getElementById('hypotenuse').value);
    

            

                var myTriangle = new Triangle(length,width,hypotenuse);

                document.getElementById('data').innerHTML = myTriangle.toString();

            }
                 
  </script>
 </head>
    
<body>

    <h3>Program Calculates Area and Perimeter of the triangle</h3>
    <p>Enter the length: <input type="text" id="width" value="" />
    <p>Enter the width: <input type="text" id="length" value="" />
   <input type="button"  value="Calculate"  onClick="getAll()" /></p>

    <p id="data"></p>
</body>
     </html>
