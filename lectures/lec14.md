### Lec14 Derivative of Trigonometric Function.
#### Assume $$x$$ is always radian fo Trigonometric functions.

#### Derivative of $$f(x)=\sin{(x)}$$
From $$\sin(x+h)=\sin(x)\cos(h)+\cos(x)\sin(h)$$,
$$$
\begin{eqnarray}
f'(x)&=&\lim_{h\to 0}\frac{f(x+h)-f(x)}{h}=\lim_{h\to 0}\frac{\sin(x)\cos(h)+\cos(x)\sin(h)-\sin(x)}{h}\\
&=&\lim_{h\to 0}\left[\frac{\sin(x)\cos(h)-\sin(x)}{h}+\frac{\cos(x)\sin(h)}{h} \right]\\
&=&\lim_{h\to 0}\left[\sin(x)\cdot \frac{\cos(h)-1}{h}+\cos(x)\cdot\frac{\sin(h)}{h} \right]
\end{eqnarray}
$$$
Since $$\lim_{h\to 0} \sin(x)=\sin(x)$$ and $$\lim_{h\to 0} \cos(x)=\cos(x)$$  
we need to find $$\lim_{h\to 0}\frac{\cos(h)-1}{h}$$ and $$\lim_{h\to 0}\frac{\sin(h)}{h}$$

#### $$\lim_{\theta\to 0}\frac{\sin(\theta)}{\theta}$$

![picw300](https://cloud.githubusercontent.com/assets/10469752/6321165/aafec812-bac1-11e4-9215-e89d66c67712.png)

Assume $$\theta>0$$
$$$Area(\triangle BOA) <Area( Sector(BOA)< Area(\triangle DOA)$$$
implies 
$$$\sin(\theta)<\theta<\tan(\theta)$$$
So
$$$  \cos(\theta)<\frac{\sin(\theta)}{\theta}<1$$$
Since $$\lim_{\theta\to 0} \cos(\theta)=1$$, by squeeze theorem,
$$$
\lim_{\theta\to 0^+}\frac{\sin(\theta)}{\theta}=1
$$$
By using $$\theta'=-\theta$$ and $$\sin{-\theta}=-\sin{\theta}$$
$$$
1=\lim_{\theta\to 0^+}\frac{\sin(\theta)}{\theta}=\lim_{\theta'\to 0^-}\frac{\sin(-\theta')}{-\theta}=\lim_{\theta'\to 0^-}\frac{-\sin(\theta')}{-\theta}
=\lim_{\theta'\to 0^-}\frac{\sin(\theta')}{\theta'}
$$$
Therefore
$$$
\lim_{\theta\to 0^+}\frac{\sin(\theta)}{\theta}=1
$$$
