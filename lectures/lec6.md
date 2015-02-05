## Lec 6

### Theorem

$$ \lim_{x\to a} f(x)=L \Leftrightarrow  \lim_{x\to a^-} f(x)=L=\lim_{x\to a^+} f(x) $$


#### Example 6.

$$ \lim_{x\to 0} |x| $$

#### Example 7.

$$ \lim_{x\to 0} \frac{|x|}{x} $$


#### Example 8.

$$ \lim_{x\to 0} \frac{x^2}{|x|} $$

#### Example 9.

$$ \lim_{x\to 0} \sqrt{x}=$$

#### Example 10.
If
$$
f(x)=\left\{
\\begin{array}{ll}
\sqrt{x-4} & x>4\\
8-2x & x<4
\\end{array}
\right.
$$
1. Find
$$ \lim_{x\to 4} f(x)$$
2. Graph $y=f(x)$.

### Theorem( inequality of limit)
If $f(x)\leq g(x)$  when $x$ is near $a$ ($x\neq a$) and $\lim_{x\to a} f(x)$ and $\lim_{x\to a} g(x)$ exists,then

$$ \lim_{x\to a} f(x)\leq \lim_{x\to a} g(x)$$

#### Remark. Strict inequality does not hold for the limits.
For $x>0$,
$$ \frac{1}{x}>0$$
But
$$  \lim_{x\to \infty} \frac{1}{x}=0$$ 

### (The squeeze Theorem) If $f(x)\leq g(x)\leq h(x)$  when $x$ is near $a($x\neq a$) and 
$$\lim_{x\to a} f(x)=\lim_{x\to a} h(x)=L$$
Then
$$
\lim_{x\to a} g(x)=L
$$

#### Example 11 Using the squeeze lemma, find
$$
\lim_{x\to a} x^2\cdot\sin(\frac{1}{x})
$$

#### We cannot say

$$
\lim_{x\to a} x^2\cdot\sin(\frac{1}{x})=(\lim_{x\to a} x^2)\cdot\lim_{x\to a}(\sin(\frac{1}{x}))
$$
Why not?
