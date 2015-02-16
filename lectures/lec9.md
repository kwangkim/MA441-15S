## Lec9


#### Warm up
Find the equation of the line with slope 2, passing through $$(1,1)$$.

##### slope-point formula.
The line through the point $$(x_1,y_1)$$ with slope $$m$$.
$$
y-y_1=m(x-x_1)
$$

#### Motivation.
To find the tangent line to curve $$C:y=f(x)$$ at the point $$P(a,f(a))$$, we use the secant lines $$\overline{PQ}$$ 
by choooing $Q(x,f(x))$ near $P$ ($$x=\neq a$$).
The slope of secant line $$\overline{PQ}$$ is

$$$
m_{PQ}= \frac{f(x)-f(a)}{x-a}
$$$
If $$m_{PQ}$$ is approaching a unique number $$m$$ as $$Q$$ approach $P$ along the curve $C$, we define $m$ as the slope of tangent line.

#### Tangent Line
Let $$C$$ is a curve given by $$y=f(x)$$. Then the slope of the tangent line to $$C$$ at the point $$(a,f(a))$$ is 
$$$
m=\lim_{x\to a} \frac{f(x)-f(a)}{x-a}=\lim_{h\to 0} \frac{f(a+h)-f(a)}{h}
$$$
#### Example 1
Find an equation of the tangent line to the parabola $$y=x^2$$ at the point $$P(1,1)$$.

#### Example 2
Find an equation of the tangent line to the hyperbola $$y=\frac{3}{x}$$ at the point $$P(3,1)$$.

#### velocity
Let $$s=f(t)$$ is the displacement from the origin at time $$t$$.
$$$
average~velocity=\frac{displacement}{time}=\frac{f(a+h)-f(a)}{h}
$$$
It is the same to the slope of the secant line $$\overline{PQ}$$. Therefore we can define
the instantaneous velicity $$v(a)$$ at time $$t=a$$ to be the limit of the average 
velocities.
$$$
v(a)=\lim_{h\to 0} \frac{f(a+h)-f(a)}{h}
$$$

#### Example 3.
Suppose that a ball is dropped from the upper observation deck of the CN Tower, 450 m above the ground.
Assume that the distance fallen after $$t$$ seconds is $$4.9t^2$$.

1. What is the velocity of the ball after 5 second?

2. How fast the ball traveling when it hits the ground?

### Derivative

The derivative of a function $$f$$ at a number $$a$$, denoted by $$f'(a)$$ is

$$$
f'(a)=\lim_{h\to 0} \frac{f(a+h)-f(a)}{h}=\lim_{x\to a} \frac{f(x)-f(a)}{x-a}
$$$
if this limit exists.

#### Example4. 
Find the derivative of the function $$f(x)=x^2-8x+9$$ at the number $$a$$.


### (instantaneous) rate of change
$$$
\lim_{\Delta x\to 0} \frac{\Delta y}{\Delta x}=\lim_{x_2\to x_1}\frac{f(x_2)-f(x_1)}{x_2-x_1}
$$$
