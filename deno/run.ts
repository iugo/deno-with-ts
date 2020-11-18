// deno run --unstable --allow-all run.ts

const [_diagnostics, actual] = await Deno.bundle('deno.ts', undefined, {
  target: "es3",
});

console.log(actual);