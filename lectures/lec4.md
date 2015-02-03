## LEC 4 The limit of a function II

### Goal 

 * one-sided limits
 * inifite limits
 * vertical asymtote(s)

#### Example 1. (Jump)

Let \\( f(x)=\frac{|x|}{x} \\). Find

\\[\lim_{x\to 0} f(x)\\]

<iframe scrolling="no" src="https://tube.geogebra.org/material/iframe/id/616813/width/646/height/556/border/888888/rc/false/ai/false/sdz/true/smb/false/stb/false/stbh/true/ld/false/sri/true/at/auto" width="646px" height="556px" style="border:0px;"> </iframe>

Therefore there is no limit at \\(x=0\\). But we can define one-sided limits.

#### Left-handed limit

\\[\lim_{x\to x_0^-} f(x)=L\\]

we say the limit of \\(f(x)\\) as \\(x\\) approaches \\(x_0\\) from the left is equal to \\(L\\) if
 we can make the values of \\(f(x)\\) arbitrarily close to \\(L\\) by taking \\(x\\)'s to be sufficiently close to  \\(x_ 0\\) and \\(x\\) is less than \\(x_0\\).
 
 #### right-handed limit

\\[\lim_{x\to x_0^+} f(x)=L\\]

we say the limit of \\(f(x)\\) as \\(x\\) approaches \\(x_0\\) from the right is equal to \\(L\\) if
 we can make the values of \\(f(x)\\) arbitrarily close to \\(L\\) by taking \\(x\\)'s to be sufficiently close to  \\(x_0 \\) and \\(x\\) is greater than \\(x_0\\).

Now let's find  
\\( \lim_ {x\to 0^-} f(x)=? \\)
and 
\\( \lim_ {x\to 0^+} f(x)=? \\)

#### proposition.

\\( \lim_ {x\to x_0} f(x)=L \\)
is equivalent to
\\( \lim_ {x\to x_0^-} f(x)=L \\)
and
\\( \lim_ {x\to x_0^+} f(x)=L \\)

#### Why do we need a rigorous definition of the limit of a funciton.

Let \\(f(x)=x^2\cdot cos(\frac{\pi}{x})\\). Find
\\[
\lim_{x\to 0} f(x)
\\]
<iframe scrolling="no" src="https://tube.geogebra.org/material/iframe/id/616829/width/678/height/406/border/888888/rc/false/ai/false/sdz/true/smb/false/stb/false/stbh/true/ld/false/sri/true/at/auto" width="678px" height="406px" style="border:0px;"> </iframe>

#### [Check up](http://tutorial.math.lamar.edu/Classes/CalcI/OneSidedLimits.aspx)
![Check](http://tutorial.math.lamar.edu/Classes/CalcI/OneSidedLimits_files/image004.gif)

\\(f(-4)=?\\), 
\\( \lim_ {x\to -4^-} f(x)=? \\),
\\( \lim_ {x\to {-4}^+} f(x)=?\\),
\\( \lim_ {x\to {-4}} f(x)=?\\)

\\( f(1)=?\\), 
\\( \lim_ {x\to 1^-} f(x)=? \\), 
\\( \lim_ {x\to 1^+} f(x)=? \\), 
\\( \lim_ {x\to 1} f(x)=? \\)

\\(f(6)=?\\), 
\\( \lim_ {x\to 6^-} f(x)=? \\), 
\\( \lim_ {x\to 6^+} f(x)=? \\), 
\\( \lim_ {x\to 6} f(x)=? \\)

### infinite limits

#### Example. 

Find \\( lim_{x\to 0} \frac{1}{x^2} \\) if it exists.

![1/x^2](http://www.dsearls.org/courses/M132BusinessCalc/Samples/InfLimits05.gif)

From the graph,
\\[ lim_ {x\to 0} \frac{1}{x^2}=\infty \\]

Similarly,
\\[ lim_ {x\to 0}(- \frac{1}{x^2})=-\infty \\]

#### Example.

Find \\( lim_{x\to 0} \frac{1}{x} \\) if it exists.

![1/x](http://www.sagemath.org/calctut/calctut-pix/onesided05.png)

From the graph,
\\[ lim_{x\to 0^+} \frac{1}{x}=\infty \\]

\\[ lim_{x\to 0^-} \frac{1}{x}=-\infty \\]

Therefore, the limit does not exist at \\(x=0\\).

### Vertical asymptote \\( x=a \\) of the curve \\( y=f(x) \\).
if at least one of the following statements is true:
\\[ lim_ {x\to a^+} f(x)=\infty \\]
\\[ lim_ {x\to a^+} f(x)=-\infty \\]
\\[ lim_ {x\to a^-} f(x)=\infty \\]
\\[ lim_ {x\to a^-} f(x)=-\infty \\]

#### Example.
Find
\\[ lim_ {x\to 3^+} \frac{2x}{x-3}\\]

\\[ lim_ {x\to 3^-} \frac{2x}{x-3}\\]

vertical asymptote(s) of \\( y=\frac{2x}{x-3} \\).

![2x/(x-3)](http://formula.algebra.com/cgi-bin/plot-formula.mpl?expression=graph%28400%2C300%2C-10%2C10%2C-10%2C10%2C%282x%29%2F%28x-3%29%29&x=0003)
