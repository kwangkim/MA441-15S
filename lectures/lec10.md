## Lec 10 
2.2 derivative as a function

$$$
f'(x)=y=\frac{dy}{dx}=Df(x)=D_x f(x)=\lim_{h\to 0} \frac{f(x+h)-f(x)}{h}
$$$
We can regard $$f'$$ as a new function, called the derivative of $$f$$.

#### Remark. $$D$$ and $$\frac{d}{dx}$$ are called differentiation operators.

#### Example 1.

a. If $$f(x)=x^3-x$$, find a formula for $$f'(x)$$.

b. Illustrate by comparing the graphs of $$f$$ and $$f'$$.

c. Find the domain of $$f'$$.

<iframe scrolling="no" src="https://tube.geogebra.org/material/iframe/id/690893/width/763/height/667/border/888888/rc/false/ai/false/sdz/true/smb/false/stb/false/stbh/true/ld/false/sri/true/at/auto" width="763px" height="667px" style="border:0px;"> </iframe>

#### Example 2.

a. If $$f(x)=\sqrt{x}$$, find a formula for $$f'(x)$$.

b. Illustrate by comparing the graphs of $$f$$ and $$f'$$.

c. Find the domain of $$f'$$.

#### Example 3.

a. If $$f(x)=\frac{1-x}{2+x}$$, find a formula for $$f'(x)$$.

b. Illustrate by comparing the graphs of $$f$$ and $$f'$$.

c. Find the domain of $$f'$$.

#### Differentiable at $$a$$

> A function $$f$$ is differentiable at $$a$$ if $$f'(a)$$ exists. It is differentiable on an open interval $$(a,b)$$ if it is differentiable at every number in the interval.

#### Example 4.

Where us function $$f(x)=|x|$$  differentiable?

Hint: Consider three cases, $$x>0,~x=0,~x<0$$.

#### Theorem
If $$f$$ is differentiable at $$x=a $$, $$f$$ is continuous at $$x=a $$.

1. $$\lim_{x\to a} \left[ f(x)-f(a) \right]=0$$

2. Use $$f(x)=f(a)+f(x)-(a) $$ to prove $$\lim_{x\to a} f(x)=f(a) $$ 

#### (Converse ?)
The converse of above theorem is false since $$f(x)=|x| $$ is not differentiable at 0.

#### Fail to be differentiable!

1. A discontinuity by above theorem

![picw200](https://cloud.githubusercontent.com/assets/10469752/6217839/2eddc326-b5e6-11e4-97db-17ef6248303a.png)

2. A corner: No unique tangent line.

![picw200](https://cloud.githubusercontent.com/assets/10469752/6217867/6e695906-b5e6-11e4-9b25-90a1f336d4b4.png)

3. A vertical tangent line

![picw200](https://cloud.githubusercontent.com/assets/10469752/6217881/8b6667ba-b5e6-11e4-9f20-097790b10a67.png)
