# NODEJS2021Q4

Rolling Scopes School NodeJS 2021 Q4

- [Ciphering CLI Tool](#ciphering-cli-tool)

# Ciphering CLI Tool

CLI tool that encrypts and decrypts a text by 3 substitution ciphers:

- [Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher)
- [Atbash cipher](https://en.wikipedia.org/wiki/Atbash)
- [ROT-8 as variation of ROT-13](https://en.wikipedia.org/wiki/ROT13)

## Options

    -c, --config          Mandatory. Config is a string with pattern {XY(-)}n,
                          where: X is a cipher mark (C is for Caesar cipher with
                          shift 1, A is for Atbash cipher and R is for ROT-8
                          cipher), Y is flag of encrypting or decrypting,
                          mandatory for Caesar cipher and ROT-8 cipher and
                          should not be passed Atbash cipher (1 is for
                          encrypting, 0 is for decrypting)

    -i, --input           Optional. A path to input file. The file must exist
                          and be readable. If this option is omitted, stdin will
                          be used

    -o, --output          Optional. A path to output file. The file must exist
                          and be writable. If this option is omitted, stdout
                          will be used

## Examples

```bash
$ node ciphering-cli-tool -c "C1-C1-R0-A" -i "./input.txt" -o "./output.txt"
```

> `This is secret. Message about "_" symbol!`\
> `Myxn xn nbdobm. Tbnnfzb ferlm "_" nhteru!`

---

```bash
$ node my_ciphering_cli -c "C1-C0-A-R1-R0-A-R0-R0-C1-A" -i "./input.txt" -o "./output.txt"
```

> `This is secret. Message about "_" symbol!`\
> `Vhgw gw wkmxkv. Ckwwoik onauv "_" wqcnad!`

---

```bash
$ node my_ciphering_cli -c "A-A-A-R1-R0-R0-R0-C1-C1-A" -i "./input.txt" -o "./output.txt"
```

> `This is secret. Message about "_" symbol!`\
> `Hvwg wg gsqfsh. Asggous opcih "_" gmapcz!`

---

```bash
$ node my_ciphering_cli -c "C1-R1-C0-C0-A-R0-R1-R1-A-C1" -i "./input.txt" -o "./output.txt"
```

> `This is secret. Message about "_" symbol!`\
> `This is secret. Message about "_" symbol!`
