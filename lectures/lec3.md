## LEC 3 The limit of a function I

### Goal 

 * Understanding the definition of function
 * Understanding the verval definition of the limit of a function
 * Making a table for a function
 * importance of the graph for the limit. (Table is not enough.)

### [function](http://en.wikipedia.org/wiki/Function_%28mathematics%29)
![Function](http://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Function_machine2.svg/220px-Function_machine2.svg.png)

**Function** is a relation between a set of inputs (X) and a set of possible outputs (Y) with the following property.

> For each x in X, there exists the unique y in Y

Therefore, the limit of a **function** is about the relation between **x'**s and **y's**.

Now let me recall the tangent line of \\(y=\frac{x^2}{4}\\) at \\( x_0=2\\). 
The slope of secant line of \\( (x_0,f(x_0))\\) and \\((x_0+\Delta x,f(x_0+\Delta x))\\)  is given by
\\[
\frac{\Delta y}{\Delta x}=\frac{f(x_0 + \Delta x) - f(x_0)}{x_0+\Delta x-x_0}=\frac{f(\Delta x+x_0)-f(x_0)}{\Delta x}
\\]
For example, if \\(\Delta x=1\\), then
\\[
\frac{\Delta y}{\Delta x}=\frac{f(x_0+\Delta x)-f(x_0)}{\Delta x}=\frac{f(2+1)-f(2)}{1}=\frac{2.25-1}{1}=1.25
\\]

#### table

<table class="table-bordered text-center large md-col-2">
<tr>
<th> \\( \Delta x \\)</th><th>1</th><th>0.5</th><th>0.01</th><th>0.001</th><th>0.0001</th><th>-0.0001</th>
</tr>
<tr>
<td> slope of secant line</td><td>1.25</td><td>1.125</td><td>1.0025</td><td>1.0025</td><td><strong>1.00003</strong></td><td><strong>0.99998</strong></td>
</tr>
</table>




From the table, we can **guess** (but we cannot confirm yet),



\\[
0.99998 \leq \lim_{\Delta x\to 0} \frac{\Delta y}{\Delta x} \leq 1.00003 
\\]



#### graph.

<iframe scrolling="no" src="https://tube.geogebra.org/material/iframe/id/611503/width/800/height/547/border/888888/rc/false/ai/false/sdz/true/smb/false/stb/false/stbh/true/ld/false/sri/true/at/auto" width="800px" height="547px" style="border:0px;"> </iframe>

From the table and the graph, we expect that

\\[
\lim_{\Delta x \to 0}\frac{\Delta y}{\Delta x}=the~slope~of~tagent~line~at~x_0=1
\\]

Here we can **approximate** the values of \\(\frac{f(x_0+\Delta x)-f(x_0)}{\Delta x}\\) ** as accurate as we want**.g the with values of the slope of secant lines by choosing very small \\(\Delta x\\). In other words, eventually, we can approximate **locally**.

### function example

Let \\(f(x)=(x-4)^3+3\\).

\\[
\lim_{x\to 4} f(x)=?
\\]

<iframe scrolling="no" src="https://tube.geogebra.org/material/iframe/id/612203/width/800/height/631/border/888888/rc/false/ai/false/sdz/true/smb/false/stb/false/stbh/true/ld/false/sri/true/at/auto" width="800px" height="631px" style="border:0px;"> </iframe>

#### result

### definition of the limit of a function \\(y=f(x)\\) at \\(x=x_0\\).

> Suppose f(x) defined when x is near the number a except \\(x=x_0\\). (This means that f is defined on some open interval that contains \\(x_0\\), except possibly at \\(x_0\\) itself.) Then we write
\\[
\lim_{x\to x_0}f(x)=L
\\]
and say "the limit of f(x), as x approaches \\(x_0\\), equals L".
if we make the value**s** of f(x) arbitrarily close L by taking **x's** to be sufficiently close to \\(x_0\\) but not equal to \\(x_0\\).

Facts

* Do not forget, \\(x\neq x_0\\).

* \\(f(x_0) \\) and \\( lim_{x\to x_0}f(x) \\) does not have a relation in general.
\\(f(x)\\) need not even be defined when \\(x=x_0 \\).

### Example 1

<iframe scrolling="no" src="https://tube.geogebra.org/material/iframe/id/53830/width/800/height/486/border/888888/rc/false/ai/false/sdz/true/smb/false/stb/false/stbh/true/ld/false/sri/true/at/auto" width="800px" height="486px" style="border:0px;"> </iframe>

### Example 2
<iframe scrolling="no" src="https://tube.geogebra.org/material/iframe/id/612225/width/800/height/647/border/888888/rc/false/ai/false/sdz/true/smb/false/stb/false/stbh/true/ld/false/sri/true/at/auto" width="800px" height="647px" style="border:0px;"> </iframe>

### importance of graph with \\(y=sin(\frac{\pi}{x})\\)

#### Make the table.


#### Graph.

<iframe scrolling="no" src="https://tube.geogebra.org/material/iframe/id/68050/width/800/height/700/border/888888/rc/false/ai/false/sdz/true/smb/false/stb/false/stbh/true/ld/false/sri/true/at/auto" width="800px" height="700px" style="border:0px;"> </iframe>


