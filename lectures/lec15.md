### LEC 15 Chain rule

Let $$F(x)=f(g(x))$$. If $$g$$ is differentiable at $$x$$ and $$f$$ is differentiable at $$g(x)$$, then $$F(x)$$ is also differentiable at $$x$$ and


$$$
F'(x)=f'(g(x))\cdot g'(x)
$$$
In other word, if $$y=f(u)$$ and $$u=g(x)$$ ,
$$$
\frac{dy}{dx}=\frac{dy}{du} \cdot \frac{du}{dx}
$$$

#### EX1,  Find $$F'(x)$$ if $$F(x)=\sqrt{x^2+1}$$

Let $$u=x^2+1$$ and $$y=\sqrt{u}$$. From $$\frac{du}{dx}=2x$$ and $$\frac{dy}{du}=\frac{1}{2}u^{-\frac{1}{2}}=\frac{1}{2\sqrt{u}}$$

$$$
F'(x)=\frac{dy}{du}\cdot \frac{du}{dx}=\frac{1}{2\sqrt{u}}\cdot 2x=\frac{2x}{2\sqrt{x^2+1}}=x/\sqrt{x^2+1}
$$$

#### EX2.
a. $$y=\sin(x^2)$$ 


b.$$y=\sin^2(x)$$


#### EX3. Differentiate $$y=(x^3-1)^{100}$$.


#### EX4. Differentiate $$y=(2x+1)^5\cdot(x^3-x+1)^4$$


#### EX5.  Differentiate $$y=\sin(\cos(\tan(x)))$$


#### EX6.  Differentiate $$y=\sin(x)\cdot \cos(x^2)$$


#### EX7. If $$h(x)=\sqrt{4+3f(x)}$$, where $$f(1)=7,~f'(1)=4$$, find $$h'(1)$$.
