## Lec 7 1.8 continuity.

A function $f$ is continuous at a number $a$ if
$$
\lim_{x\to a}f(x)=f(a)
$$
Otherwise, we say $f$ is discontinuous at $a$
#### Remark.

1. $f(a)$ is defined.
2. $\lim_{x\to a}f(x)$ exists
3. $\lim_{x\to a}f(x)=f(a)$


### [Classification of discontinuities](http://en.wikipedia.org/wiki/Classification_of_discontinuities)

#### Removable discontinuity (Hole)
![picw300](http://upload.wikimedia.org/wikipedia/commons/9/9d/Discontinuity_removable.eps.png)

#### Jump discontinuity (Jump)
![picw300](http://upload.wikimedia.org/wikipedia/commons/e/e6/Discontinuity_jump.eps.png)

#### essential discontinuity (infinity)
(When one of onsided limits does not exist or infinite)
![picw300](http://upload.wikimedia.org/wikipedia/commons/9/92/Discontinuity_essential.eps.png)

Example 1. Where are each of the following functions discontinuous?

1. $ f(x)=\frac{x^2-x-2}{x-2}$
2. 
$$
f(x)=
\left\{
\begin{array}{ll}
\frac{1}{x} & x\neq 0\\
1 & x=0
\end{array}
\right.
$$
3.
$$
f(x)=
\left\{
\begin{array}{ll}
\frac{x^2-x-2}{x-2}& x\neq 2\\
1 & x=2
\end{array}
\right.
$$
### A function  $f$ is continuous from the right at a number $a$ if

$$ \lim_{x\to a^+} f(x)=f(a)$$

### A function $f$ is Continuous from the left at a number $a$ if

$$ \lim_{x\to a^-} f(x)=f(a)$$

### Definition

1. A function $f$ is continous on an interval if it is continuos at every number in the interval. 

2. If $f$ is defined only on one side of an endpoint of the interval, we understand continous at the endpoint to mean continuous from the right or continuous from the left.

#### We should handle two endpoints carefully.

#### Example 2. Check whether the function $f(x)=1-\sqrt{1-x}$ is continuous on the interval $[-1,1]$.
(Interior points)  $-1 < a < 1$


(End points) $ a=-1 $ or $ a=1 $


### Theorem 
If $f$ and $g$ are continuous at $a$ and $c$ is a constant, then the following functions are also continuous at $a$,
1. $f+g$
2. $f-g$
3. $cf$
4. $fg$
5. $\frac{f}{g}$ if $g(a)\neq 0$.


### Corollary
1. Any polynomial is continuous on $\mathbb{R} = (-\infty,\infty)$
2. Any rational function is continuous on its domain.



#### Remark.
3. Radical function is continuous on the domain.
4. Trigonometric functions is continuous on the domain.

#### Example 3
$$
\lim_{x\to -2} \frac{x^3+2x^2-1}{5-3x}
$$

#### Example 4
1. $f(x)=x^{100}-2x^{37}+75$
2. $g(x)=\frac{x^2+2x+17}{x^2-1}$
3. $h(x)=\sqrt{x}+\frac{x+1}{x-1}-\frac{x+1}{x^2+1}$

#### Example 5. Evaluate
$$ \lim_{x\to \pi} \frac{\sin{x}}{2\cos{x}}$$

### Theorem
If $f$ is **continuous** at $b$ and $\lim_{x\to a} g(x)=b$, then 
$$\lim_{x\to a}=f(\lim_{x\to a} g(x))=f(b)$$
In other words, a evaluation of a continuous function commutes with thel limit process.

#### Corollary 1
$$
\lim_{x\to a} \sqrt[n]{g(x)}=\sqrt[n]{\lim_{x\to a}g(x)} 
$$
#### Corollary 2 
If $g$ is continuous at $a$ and $f$ is continuous at $g(a)$, then the composite function $f\circ g$ is continuous at $a$.

#### Example 6 Where are the following functions continuous?
1. $h(x)=sin(x^2)$
2. $F(x)=\frac{1}{\sqrt{x^2+7} -4}$



