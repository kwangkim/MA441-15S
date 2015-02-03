## LEC 4 The limit of a function I

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
 we can make the values of \\(f(x)\\) arbitrarily close to \\(L\\) by taking \\(x\\)'s to be sufficiently close to  \\(x_0\\) and \\(x\\) is less than \\(x_0\\).
 
 #### right-handed limit

\\[\lim_{x\to x_0^+} f(x)=L\\]

we say the limit of \\(f(x)\\) as \\(x\\) approaches \\(x_0\\) from the right is equal to \\(L\\) if
 we can make the values of \\(f(x)\\) arbitrarily close to \\(L\\) by taking \\(x\\)'s to be sufficiently close to  \\(x_0 \\) and \\(x\\) is greater than \\(x_0\\).

Now let's find  \\(\lim_{x\to 0^-}\frac{|x|}{x}=?\\) and \\(\lim_{x\to 0^+} \frac{|x|}{x}=?\\)

#### proposition.

\\[\lim_{x\to x_0} f(x)=L \Leftrightarrow \lim_{x\to x_0^-} f(x)=L~and~\lim_{x\to x_0^-} f(x)=L\\]

#### Why do we need a rigorous definition of the limit of a funciton.

Let \\(f(x)=x^2\cdot cos(\frac{\pi}{x})\\). Find
\\[
\lim_{x\to 0} f(x)
\\]
<iframe scrolling="no" src="https://tube.geogebra.org/material/iframe/id/616829/width/678/height/406/border/888888/rc/false/ai/false/sdz/true/smb/false/stb/false/stbh/true/ld/false/sri/true/at/auto" width="678px" height="406px" style="border:0px;"> </iframe>

#### [Check up](http://tutorial.math.lamar.edu/Classes/CalcI/OneSidedLimits.aspx)
![Check] (http://tutorial.math.lamar.edu/Classes/CalcI/OneSidedLimits_files/image004.gif)

\\(f(-4)=?\\) \\(\lim_{x\to -4^-} f(X)=?\\) \\(\lim_{x\to -4^+} f(X)=?\\) \\(\lim_{x\to -4} f(X)=?\\)

\\(f(1)=?\\) \\(\lim_{x\to 1^-} f(X)=?\\) \\(\lim_{x\to 1^+} f(X)=?\\) \\(\lim_{x\to 1} f(X)=?\\)

\\(f(6)=?\\) \\(\lim_{x\to 6^-} f(X)=?\\) \\(\lim_{x\to 6^+} f(X)=?\\) \\(\lim_{x\to 6} f(X)=?\\)
