### Lec 16 Implicit Differentiation.

#### Why?

Find the slope of tangent line to the circle $$x^2+y^2=25$$ at the point $$(3,4)$$.

$$ y^2=25-x^2$$ implies $$y=\pm \sqrt{25-x^2}$$. Since $$4>0$$. Choose
$$y=\sqrt{25-x^2}$$.
From the chain rule, by letting $$u=25-x^2$$,
$$$
\frac{dy}{dx}=\frac{dy}{dy}\cdot \frac{du}{dx}=(\frac{1}{2\sqrt{u}})\cdot(-2x)=\frac{-x}{\sqrt{25-x^2}}
$$$
Therefore $$y'=\frac{-1(3)}{\sqrt{25-(3)^2}}=-\frac{3}{4}$$.

It takes too much time since the original equation is given by an implicit form.
There is an alternative way which is called the method of **implicit differentiation**.

Let $$y'=\frac{dy}{dx},~x'=\frac{dx}{dx}=1$$.
<br>
a. Differentiate both sides of the equation $$x^2+y^2=25$$

$$$
\frac{d}{dx}(x^2+y^2)=\frac{d}{dx}(25)
$$$
b. Use the chain rule,
$$$
2x\cdot x'+2y\cdot y'=0
$$$

Since $$x'=1$$, $$\frac{dy}{dx}=y'=\frac{-2x}{2y}=-\frac{x}{y}$$.

Therefore $$slope=y'=-\frac{3}{4}$$.

#### Ex1
a. Find $$y'$$ if $$x^3+y^3=6xy$$

b. Find the tangent to the folium of Descartes $$x^3+y^3=6xy$$ at the point $$(3,3)$$.

#### Ex2. Find $$y'$$ if $$\sin(x+y)=y^2\cdot \cos(x)$$.


#### EX3. Find $$y',~y''$$ if $$x^4+y^4=16$$.








