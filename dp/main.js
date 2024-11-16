function fib(n) {
  if (n < 2) {
    return n;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
}

function fibM(n, memo = {}) {
  if (n < 2) {
    return n
  }

  if (memo[n] !== undefined) {
    return memo[n];
  }

  memo[n] = fibM(n - 1, memo) + fibM(n - 2, memo)
  return memo[n];
}

function lcs(word1, word2) {
  let max = 0;
  let index = 0;
  var lcsarr = new Array(word1.length + 1);

  console.log(`Initializing LCS array for words: "${word1}" and "${word2}"`);

  for (var i = 0; i <= word1.length; ++i) {
    lcsarr[i] = new Array(word2.length + 1);
    for (var j = 0; j <= word2.length; ++j) {
      lcsarr[i][j] = 0;
    }
  }

  console.log("Initialized LCS matrix:", lcsarr);

  for (var i = 1; i <= word1.length; ++i) {
    for (var j = 1; j <= word2.length; ++j) {
      if (word1[i - 1] === word2[j - 1]) {
        lcsarr[i][j] = lcsarr[i - 1][j - 1] + 1;
        console.log(`Match found at word1[${i - 1}] and word2[${j - 1}] ('${word1[i - 1]}'): Updated lcsarr[${i}][${j}] to ${lcsarr[i][j]}`);

        if (max < lcsarr[i][j]) {
          max = lcsarr[i][j];
          index = i;
          console.log(`New max length found: ${max} at index ${index}`);
        }
      } else {
        lcsarr[i][j] = 0;
      }
    }
  }

  console.log("Final LCS matrix after computation:", lcsarr);

  var str = "";
  if (max == 0) {
    console.log("No common substring found.");
    return "";
  } else {
    for (var i = index - max; i < index; ++i) {
      str += word1[i];
    }
    console.log(`Longest common substring: "${str}"`);
    return str;
  }
}

lcs('back', 'cace')

function delay(func, n) {
  const start = new Date().getTime();
  const x = func(n)
  const stop = new Date().getTime();
  const diff = stop - start
  console.log('Time taken ' + diff + "ms. " + 'fib number ' + n + ' = ' + x);
}

function dpFib(n) {
  const val = [];
  for (let i = 0; i < n; i++) {
    val[i] = 0;
  }
  if (n === 0) {
    return 0
  }
  if (n === 1 || n === 2) {
    return 1;
  }
  else {
    val[1] = 1;
    val[2] = 2;
    for (let i = 3; i <= n; i++) {
      val[i] = val[i - 1] + val[i - 2];
    }
    return val[n - 1]
  }
}

