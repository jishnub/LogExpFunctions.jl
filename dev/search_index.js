var documenterSearchIndex = {"docs":
[{"location":"#LogExpFunctions","page":"LogExpFunctions","title":"LogExpFunctions","text":"","category":"section"},{"location":"","page":"LogExpFunctions","title":"LogExpFunctions","text":"Various special functions based on log and exp moved from StatsFuns.jl into a separate package, to minimize dependencies. These functions only use native Julia code, so there is no need to depend on librmath or similar libraries. See the discussion at StatsFuns.jl#46.","category":"page"},{"location":"","page":"LogExpFunctions","title":"LogExpFunctions","text":"The original authors of these functions are the StatsFuns.jl contributors.","category":"page"},{"location":"","page":"LogExpFunctions","title":"LogExpFunctions","text":"xlogx\nxlogy\nlogistic\nlogit\nlog1psq\nlog1pexp\nlog1mexp\nlog2mexp\nlogexpm1\nlog1pmx\nlogmxp1\nlogaddexp\nlogsumexp\nsoftmax!\nsoftmax","category":"page"},{"location":"#LogExpFunctions.xlogx","page":"LogExpFunctions","title":"LogExpFunctions.xlogx","text":"xlogx(x)\n\n\nReturn x * log(x) for x ≥ 0, handling x = 0 by taking the downward limit.\n\njulia> xlogx(0)\n0.0\n\n\n\n\n\n","category":"function"},{"location":"#LogExpFunctions.xlogy","page":"LogExpFunctions","title":"LogExpFunctions.xlogy","text":"xlogy(x, y)\n\n\nReturn x * log(y) for y > 0 with correct limit at x = 0.\n\njulia> xlogy(0, 0)\n0.0\n\n\n\n\n\n","category":"function"},{"location":"#LogExpFunctions.logistic","page":"LogExpFunctions","title":"LogExpFunctions.logistic","text":"logistic(x)\n\n\nThe logistic sigmoid function mapping a real number to a value in the interval 01,\n\nsigma(x) = frac1e^-x + 1 = frace^x1+e^x\n\nIts inverse is the logit function.\n\n\n\n\n\n","category":"function"},{"location":"#LogExpFunctions.logit","page":"LogExpFunctions","title":"LogExpFunctions.logit","text":"logit(x)\n\n\nThe logit or log-odds transformation,\n\nlogleft(fracx1-xright) textwhere 0  x  1\n\nIts inverse is the logistic function.\n\n\n\n\n\n","category":"function"},{"location":"#LogExpFunctions.log1psq","page":"LogExpFunctions","title":"LogExpFunctions.log1psq","text":"log1psq(x)\n\n\nReturn log(1+x^2) evaluated carefully for abs(x) very small or very large.\n\n\n\n\n\n","category":"function"},{"location":"#LogExpFunctions.log1pexp","page":"LogExpFunctions","title":"LogExpFunctions.log1pexp","text":"log1pexp(x)\n\n\nReturn log(1+exp(x)) evaluated carefully for largish x.\n\nThis is also called the \"softplus\" transformation, being a smooth approximation to max(0,x). Its inverse is logexpm1.\n\n\n\n\n\n","category":"function"},{"location":"#LogExpFunctions.log1mexp","page":"LogExpFunctions","title":"LogExpFunctions.log1mexp","text":"log1mexp(x)\n\n\nReturn log(1 - exp(x))\n\nSee:\n\nMartin Maechler (2012) “Accurately Computing log(1 − exp(− |a|))”\n\nNote: different than Maechler (2012), no negation inside parentheses\n\n\n\n\n\n","category":"function"},{"location":"#LogExpFunctions.log2mexp","page":"LogExpFunctions","title":"LogExpFunctions.log2mexp","text":"log2mexp(x)\n\n\nReturn log(2 - exp(x)) evaluated as log1p(-expm1(x))\n\n\n\n\n\n","category":"function"},{"location":"#LogExpFunctions.logexpm1","page":"LogExpFunctions","title":"LogExpFunctions.logexpm1","text":"logexpm1(x)\n\n\nReturn log(exp(x) - 1) or the “invsoftplus” function.  It is the inverse of log1pexp (aka “softplus”).\n\n\n\n\n\n","category":"function"},{"location":"#LogExpFunctions.log1pmx","page":"LogExpFunctions","title":"LogExpFunctions.log1pmx","text":"log1pmx(x)\n\n\nReturn log(1 + x) - x.\n\nUse naive calculation or range reduction outside kernel range.  Accurate ~2ulps for all x.\n\n\n\n\n\n","category":"function"},{"location":"#LogExpFunctions.logmxp1","page":"LogExpFunctions","title":"LogExpFunctions.logmxp1","text":"logmxp1(x)\n\n\nReturn log(x) - x + 1 carefully evaluated.\n\n\n\n\n\n","category":"function"},{"location":"#LogExpFunctions.logaddexp","page":"LogExpFunctions","title":"LogExpFunctions.logaddexp","text":"logaddexp(x, y)\n\n\nReturn log(exp(x) + exp(y)), avoiding intermediate overflow/undeflow, and handling non-finite values.\n\n\n\n\n\n","category":"function"},{"location":"#LogExpFunctions.logsumexp","page":"LogExpFunctions","title":"LogExpFunctions.logsumexp","text":"logsumexp(X)\n\n\nCompute log(sum(exp, X)) in a numerically stable way that avoids intermediate over- and underflow.\n\nX should be an iterator of real numbers. The result is computed using a single pass over the data.\n\nReferences\n\nSebastian Nowozin: Streaming Log-sum-exp Computation\n\n\n\n\n\nlogsumexp(X; dims)\n\n\nCompute log.(sum(exp.(X); dims=dims)) in a numerically stable way that avoids intermediate over- and underflow.\n\nThe result is computed using a single pass over the data.\n\nReferences\n\nSebastian Nowozin: Streaming Log-sum-exp Computation\n\n\n\n\n\n","category":"function"},{"location":"#LogExpFunctions.softmax!","page":"LogExpFunctions","title":"LogExpFunctions.softmax!","text":"softmax!(r, x)\n\n\nOverwrite r with the softmax (or normalized exponential) transformation of x\n\nThat is, r is overwritten with exp.(x), normalized to sum to 1.\n\nSee the Wikipedia entry\n\n\n\n\n\nsoftmax!(x)\n\n\nReturn the softmax transformation applied to x in place.\n\n\n\n\n\n","category":"function"},{"location":"#LogExpFunctions.softmax","page":"LogExpFunctions","title":"LogExpFunctions.softmax","text":"softmax(x)\n\n\nReturn the softmax transformation applied to x.\n\n\n\n\n\n","category":"function"}]
}
