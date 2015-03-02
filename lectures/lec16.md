### Lec 16 Implicit Differentiation.

[MAPLE FILE](https://piazza.com/class_profile/get_resource/i4w7v2qzpw43ey/i6r5yh2z9z25n5)

#### Why?

Find the slope of tangent line to the circle $$x^2+y^2=25$$ at the point $$(3,4)$$.
We can usually write $$y=f(x)$$ locally in a explicit way.
$$ y^2=25-x^2$$ implies $$y=\pm \sqrt{25-x^2}$$. Since $$4>0$$. Choose
$$y=\sqrt{25-x^2}$$.
From the chain rule, by letting $$u=25-x^2$$,
$$$
\frac{dy}{dx}=\frac{dy}{dy}\cdot \frac{du}{dx}=(\frac{1}{2\sqrt{u}})\cdot(-2x)=\frac{-x}{\sqrt{25-x^2}}
$$$
Therefore $$y'=\frac{-1(3)}{\sqrt{25-(3)^2}}=-\frac{3}{4}$$.
It takes too much time to find an explicit form from the implicit form.
There is an alternative way which is called the method of **implicit differentiation**.

#### implicit differentiation

The key assumption is $$y=f(x)$$ is a function of  *one variable* $$x$$.

For simplicity, let $$y'=\frac{dy}{dx},~x'=\frac{dx}{dx}=1$$.
<br>
a. Differentiate both sides of the equation $$x^2+y^2=25$$ with respect to $$x$$.

$$$
\frac{d}{dx}(x^2+y^2)=\frac{d}{dx}(25)
$$$
b. Use the chain rule.

$$$
2x\cdot x'+2y\cdot y'=0
$$$

Since $$x'=1$$, $$\frac{dy}{dx}=y'=\frac{-2x}{2y}=-\frac{x}{y}$$.

Therefore $$slope=y'=-\frac{3}{4}$$.

#### Ex1
a. Find $$y'$$ if $$x^3+y^3=6xy$$


b. Find the tangent to the folium of Descartes $$x^3+y^3=6xy$$ at the point $$(3,3)$$.

[SAGE1](https://sagecell.sagemath.org/?z=eJxL06jQqdRUsFWoiDPWrowz1jXTqtCq5OXKzC3IyUzOLIkvyMkv0UjTUdDQNdQxUdCEMBRMNDV5uQAMzQ-M&lang=sage)

[SAGE2](https://sagecell.sagemath.org/?z=eJyrtE0rzUsuyczP01CvVNep0OTlKknNLbBNyUxL06iIM9aujDPWNdOq0KoEyhTn55SlKmiAFOiAFVRqAkUB43wUwA==&lang=sage)

![picw300](https://cloud.githubusercontent.com/assets/10469752/6434154/7be20758-c050-11e4-8dda-db678cc48203.png)


#### Ex2. Find $$y'$$ if $$\sin(x+y)=y^2\cdot \cos(x)$$.

![picw300](https://cloud.githubusercontent.com/assets/10469752/6434173/f8649c32-c050-11e4-807a-5819fbbb754b.png)

#### EX3. Find $$y'$$ if $$x^4+y^4=16$$

![picw300](https://cloud.githubusercontent.com/assets/10469752/6434177/06435208-c051-11e4-95b0-c4564745c819.png)

#### EX4. Find $$y''$$ if $$x^4+y^4=16$$








