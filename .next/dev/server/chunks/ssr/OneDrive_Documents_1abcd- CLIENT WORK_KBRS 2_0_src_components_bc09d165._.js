module.exports = [
"[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Hero.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mouse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mouse$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/node_modules/lucide-react/dist/esm/icons/mouse.js [app-ssr] (ecmascript) <export default as Mouse>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$lenis$2f$dist$2f$lenis$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/node_modules/lenis/dist/lenis-react.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const containerVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2
        }
    }
};
const textRevealVariants = {
    hidden: {
        y: "120%",
        opacity: 0,
        rotateZ: 2
    },
    visible: {
        y: 0,
        opacity: 1,
        rotateZ: 0,
        transition: {
            duration: 1.2,
            ease: [
                0.16,
                1,
                0.3,
                1
            ]
        }
    }
};
const cardRevealVariants = {
    hidden: {
        opacity: 0,
        y: 40,
        scale: 0.96,
        filter: "blur(10px)"
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        transition: {
            duration: 1.4,
            ease: [
                0.16,
                1,
                0.3,
                1
            ],
            delay: 0.4
        }
    }
};
const fadeUpVariants = {
    hidden: {
        opacity: 0,
        y: 20
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            ease: "easeOut",
            delay: 0.8
        }
    }
};
function Hero() {
    const lenis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$lenis$2f$dist$2f$lenis$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLenis"])();
    const handleScrollToFooter = (e)=>{
        e.preventDefault();
        const target = document.querySelector('#footer');
        if (target) {
            const distance = Math.abs(target.getBoundingClientRect().top);
            const duration = Math.min(3.2, Math.max(1.2, distance / 900));
            if (lenis) {
                lenis.scrollTo(target, {
                    offset: 0,
                    duration
                });
            } else {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "home",
        className: "pt-0 pb-8 px-[1.1875rem] max-w-[1920px] mx-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: "hidden",
            whileInView: "visible",
            viewport: {
                once: true,
                margin: "-20%"
            },
            variants: containerVariants,
            className: "relative w-full h-[80vh] min-h-[39rem] max-h-[51.5rem]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 z-0 overflow-hidden rounded-[1rem] bg-brand-light",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].img, {
                            src: "/hero image.jpg",
                            alt: "Hero Background",
                            initial: {
                                scale: 1
                            },
                            animate: {
                                scale: 1.05
                            },
                            transition: {
                                duration: 1.5,
                                ease: "easeOut"
                            },
                            className: "w-full h-full object-cover object-center md:object-top"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Hero.tsx",
                            lineNumber: 89,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-black/50 mix-blend-multiply"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Hero.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Hero.tsx",
                    lineNumber: 88,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative z-10 w-full h-full flex flex-col justify-between pt-[3.1875rem] pb-8 pl-[3.0625rem] pr-8 md:pr-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-4xl",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-heading font-medium leading-[1.05] tracking-tight text-white flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "overflow-hidden pb-2 block",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                                            variants: textRevealVariants,
                                            className: "block",
                                            children: "Excellence in Service,"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Hero.tsx",
                                            lineNumber: 107,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Hero.tsx",
                                        lineNumber: 106,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "overflow-hidden pb-2 block",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                                            variants: textRevealVariants,
                                            className: "block",
                                            children: "Commitment to"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Hero.tsx",
                                            lineNumber: 110,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Hero.tsx",
                                        lineNumber: 109,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "overflow-hidden pb-2 block",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                                            variants: textRevealVariants,
                                            className: "block",
                                            children: "Compliance."
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Hero.tsx",
                                            lineNumber: 113,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Hero.tsx",
                                        lineNumber: 112,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Hero.tsx",
                                lineNumber: 105,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Hero.tsx",
                            lineNumber: 104,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            variants: fadeUpVariants,
                            className: "flex items-center gap-2 text-white/80 pb-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mouse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mouse$3e$__["Mouse"], {
                                    size: 20,
                                    strokeWidth: 1.5,
                                    className: "animate-bounce"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Hero.tsx",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-medium",
                                    children: "Scroll down"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Hero.tsx",
                                    lineNumber: 121,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Hero.tsx",
                            lineNumber: 119,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Hero.tsx",
                    lineNumber: 101,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    variants: cardRevealVariants,
                    className: "absolute bottom-0 right-[-1.1875rem] z-20 bg-brand-light pt-4 pl-4 rounded-tl-[1rem]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute -top-4 right-[1.1875rem] w-4 h-4 pointer-events-none",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                viewBox: "0 0 100 100",
                                className: "w-full h-full fill-brand-light",
                                preserveAspectRatio: "none",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M0,100 C55.228475,100 100,55.228475 100,0 L100,100 L0,100 Z"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Hero.tsx",
                                    lineNumber: 135,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Hero.tsx",
                                lineNumber: 134,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Hero.tsx",
                            lineNumber: 133,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute bottom-0 -left-4 w-4 h-4 pointer-events-none",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                viewBox: "0 0 100 100",
                                className: "w-full h-full fill-brand-light",
                                preserveAspectRatio: "none",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M100,0 C100,55.228475 55.228475,100 0,100 L100,100 L100,0 Z"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Hero.tsx",
                                    lineNumber: 142,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Hero.tsx",
                                lineNumber: 141,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Hero.tsx",
                            lineNumber: 140,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-tl-[1rem] rounded-bl-[1rem] p-8 md:p-10 w-full max-w-[450px] lg:max-w-[550px] shadow-lg",
                            style: {
                                background: 'linear-gradient(0deg, #1A4A6D 0%, #2A648F 50%, #3B82B8 100%)'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-white/90 text-[15px] md:text-base leading-relaxed mb-8 font-light",
                                    children: "We transform client expectations into sustainable reality through a blend of subject matter expertise and exceptional service."
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Hero.tsx",
                                    lineNumber: 148,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative inline-flex flex-row items-center",
                                    style: {
                                        filter: "url(#goo)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "absolute hidden",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                                                    id: "goo",
                                                    x: "-50%",
                                                    y: "-50%",
                                                    width: "200%",
                                                    height: "200%",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feGaussianBlur", {
                                                            in: "SourceGraphic",
                                                            stdDeviation: "8",
                                                            result: "blur"
                                                        }, void 0, false, {
                                                            fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Hero.tsx",
                                                            lineNumber: 157,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feColorMatrix", {
                                                            in: "blur",
                                                            mode: "matrix",
                                                            values: "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -9",
                                                            result: "goo"
                                                        }, void 0, false, {
                                                            fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Hero.tsx",
                                                            lineNumber: 158,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feComposite", {
                                                            in: "SourceGraphic",
                                                            in2: "goo",
                                                            operator: "atop"
                                                        }, void 0, false, {
                                                            fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Hero.tsx",
                                                            lineNumber: 164,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Hero.tsx",
                                                    lineNumber: 156,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Hero.tsx",
                                                lineNumber: 155,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Hero.tsx",
                                            lineNumber: 154,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#footer",
                                            onClick: handleScrollToFooter,
                                            className: "group relative inline-flex items-center justify-center cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "absolute right-0 top-0 bottom-0 my-auto h-[3.25rem] w-[3.25rem] rounded-lg bg-white flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:translate-x-[4rem] z-0",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                        size: 20,
                                                        className: "text-brand-dark",
                                                        strokeWidth: 2
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Hero.tsx",
                                                        lineNumber: 176,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Hero.tsx",
                                                    lineNumber: 175,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "relative z-10 rounded-lg bg-white px-8 py-4 flex items-center justify-center text-brand-dark font-medium text-sm shadow-[0_4px_20px_rgba(0,0,0,0.05)] whitespace-nowrap",
                                                    children: "Contact us"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Hero.tsx",
                                                    lineNumber: 180,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Hero.tsx",
                                            lineNumber: 169,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Hero.tsx",
                                    lineNumber: 152,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Hero.tsx",
                            lineNumber: 147,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Hero.tsx",
                    lineNumber: 127,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Hero.tsx",
            lineNumber: 79,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Hero.tsx",
        lineNumber: 77,
        columnNumber: 5
    }, this);
}
}),
"[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Vision.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Vision
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
const words = [
    {
        text: "To",
        highlight: false
    },
    {
        text: "be",
        highlight: false
    },
    {
        text: "a",
        highlight: false
    },
    {
        text: "trusted",
        highlight: false
    },
    {
        text: "financial",
        highlight: false
    },
    {
        text: "partner",
        highlight: false
    },
    {
        text: "that",
        highlight: false
    },
    {
        text: "combines",
        highlight: false
    },
    {
        text: "global",
        highlight: true
    },
    {
        text: "expertise",
        highlight: true
    },
    {
        text: "with",
        highlight: false
    },
    {
        text: "local",
        highlight: false
    },
    {
        text: "understanding,",
        highlight: false
    },
    {
        text: "empowering",
        highlight: false
    },
    {
        text: "clients",
        highlight: false
    },
    {
        text: "to",
        highlight: false
    },
    {
        text: "achieve",
        highlight: false
    },
    {
        text: "sustainable",
        highlight: true
    },
    {
        text: "growth",
        highlight: true
    },
    {
        text: "through",
        highlight: false
    },
    {
        text: "strategic,",
        highlight: false
    },
    {
        text: "compliant,",
        highlight: false
    },
    {
        text: "and",
        highlight: false
    },
    {
        text: "technology-enabled",
        highlight: false
    },
    {
        text: "financial",
        highlight: false
    },
    {
        text: "solutions.",
        highlight: false
    }
];
function Vision() {
    const textRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScroll"])({
        target: textRef,
        offset: [
            "start 0.9",
            "center 0.4"
        ]
    });
    const smoothProgress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSpring"])(scrollYProgress, {
        stiffness: 80,
        damping: 25,
        restDelta: 0.001
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-32 lg:py-48 bg-white relative",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center max-w-5xl mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 30
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: true,
                            amount: 0.3
                        },
                        transition: {
                            duration: 0.9,
                            ease: [
                                0.16,
                                1,
                                0.3,
                                1
                            ]
                        },
                        className: "mb-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs font-bold tracking-[0.3em] uppercase text-brand-accent block mb-4",
                            children: "Our Vision"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Vision.tsx",
                            lineNumber: 60,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Vision.tsx",
                        lineNumber: 53,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            scaleX: 0,
                            opacity: 0
                        },
                        whileInView: {
                            scaleX: 1,
                            opacity: 1
                        },
                        viewport: {
                            once: true,
                            margin: "-5%"
                        },
                        transition: {
                            duration: 1.2,
                            ease: [
                                0.16,
                                1,
                                0.3,
                                1
                            ],
                            delay: 0.2
                        },
                        className: "w-12 h-px bg-brand-accent/40 mx-auto mb-12 origin-left"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Vision.tsx",
                        lineNumber: 66,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        ref: textRef,
                        className: "flex flex-wrap justify-center gap-x-[0.25em] gap-y-3 text-3xl sm:text-4xl lg:text-6xl font-heading font-medium leading-[1.35]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                                className: "text-brand-gray/30 leading-none",
                                style: {
                                    opacity: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(smoothProgress, [
                                        0,
                                        0.05
                                    ], [
                                        0.1,
                                        0.4
                                    ])
                                },
                                children: '"'
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Vision.tsx",
                                lineNumber: 79,
                                columnNumber: 13
                            }, this),
                            words.map((word, i)=>{
                                const start = i / words.length;
                                const overlapEnd = start + 3 / words.length;
                                const end = Math.min(overlapEnd, 1.0);
                                if (i === words.length - 1) {
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "whitespace-nowrap flex items-end",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Word, {
                                                progress: smoothProgress,
                                                range: [
                                                    start,
                                                    end
                                                ],
                                                isHighlight: word.highlight,
                                                children: word.text
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Vision.tsx",
                                                lineNumber: 93,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                                                className: "text-brand-gray/30 leading-none pl-[0.1em]",
                                                style: {
                                                    opacity: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(smoothProgress, [
                                                        0.95,
                                                        1
                                                    ], [
                                                        0,
                                                        0.4
                                                    ])
                                                },
                                                children: '"'
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Vision.tsx",
                                                lineNumber: 96,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Vision.tsx",
                                        lineNumber: 92,
                                        columnNumber: 19
                                    }, this);
                                }
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Word, {
                                    progress: smoothProgress,
                                    range: [
                                        start,
                                        end
                                    ],
                                    isHighlight: word.highlight,
                                    children: word.text
                                }, i, false, {
                                    fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Vision.tsx",
                                    lineNumber: 107,
                                    columnNumber: 17
                                }, this);
                            })
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Vision.tsx",
                        lineNumber: 75,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Vision.tsx",
                lineNumber: 51,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Vision.tsx",
            lineNumber: 50,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Vision.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
/* ── Word Component — opacity + Y lift + blur reveal ── */ const Word = ({ children, progress, range, isHighlight })=>{
    const opacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(progress, range, [
        0.07,
        1
    ]);
    const y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(progress, range, [
        "0.4em",
        "0em"
    ]);
    const scale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(progress, range, [
        0.97,
        1
    ]);
    const baseColor = isHighlight ? "text-brand-accent" : "text-brand-dark";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "relative inline-block",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `invisible`,
                children: children
            }, void 0, false, {
                fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Vision.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                style: {
                    opacity,
                    y,
                    scale: isHighlight ? scale : undefined,
                    position: "absolute",
                    left: 0,
                    top: 0
                },
                className: baseColor,
                children: children
            }, void 0, false, {
                fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Vision.tsx",
                lineNumber: 140,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Vision.tsx",
        lineNumber: 137,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Experience.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Experience
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$react$2d$countup$2f$build$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/node_modules/react-countup/build/index.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const stats = [
    {
        label: "Combined Expertise",
        value: "30+",
        unit: "Years of Experience"
    },
    {
        label: "Global Exposure",
        value: "5",
        unit: "Countries Served"
    },
    {
        label: "Service Portfolio",
        value: "25+",
        unit: "Specialties"
    }
];
function AnimatedStat({ text }) {
    const match = text.match(/(\d+)(.*)/);
    const endValue = match ? parseInt(match[1], 10) : 0;
    const suffix = match ? match[2] : '';
    if (!match) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        children: text
    }, void 0, false, {
        fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Experience.tsx",
        lineNumber: 31,
        columnNumber: 24
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$react$2d$countup$2f$build$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        end: endValue,
        suffix: suffix,
        duration: 3,
        enableScrollSpy: true,
        scrollSpyOnce: true,
        scrollSpyDelay: 100
    }, void 0, false, {
        fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Experience.tsx",
        lineNumber: 34,
        columnNumber: 9
    }, this);
}
// Animation variants for Framer Motion stagger effect
const staggerContainer = {
    hidden: {
        opacity: 0
    },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1
        }
    }
};
// Smooth fade-up animation for individual elements
const fadeUpItem = {
    hidden: {
        opacity: 0,
        y: 30
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [
                0.16,
                1,
                0.3,
                1
            ]
        } // Custom buttery ease-out curve
    }
};
function Experience() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "experience",
        className: "w-full bg-[#FAFAFB] py-20 lg:py-32 xl:py-40 relative overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
            variants: staggerContainer,
            initial: "hidden",
            whileInView: "show",
            viewport: {
                once: true,
                margin: "-10%"
            },
            className: "w-full relative z-20",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col xl:flex-row items-stretch w-full max-w-[1920px] mx-auto xl:pr-[1.1875rem] relative xl:gap-[15.375rem] z-20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            variants: fadeUpItem,
                            initial: "hidden",
                            whileInView: "show",
                            viewport: {
                                once: true,
                                margin: "-10%"
                            },
                            className: "relative w-full xl:w-[48rem] h-auto xl:min-h-[19.5rem] shrink-0 flex items-center justify-center px-6 sm:px-12 xl:px-20 py-16 xl:py-0 self-start xl:self-auto mb-0 z-20",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 rounded-none xl:rounded-tr-[1rem] z-10 bg-brand-dark"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Experience.tsx",
                                    lineNumber: 95,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative z-20 flex flex-col sm:flex-row items-center justify-between w-full h-full gap-12 sm:gap-6",
                                    children: stats.map((stat, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col items-center sm:items-start text-center sm:text-left flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-white/75 text-[15px] sm:text-[17px] font-medium tracking-wide mb-6",
                                                    children: stat.label
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Experience.tsx",
                                                    lineNumber: 104,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-heading font-extralight bg-clip-text text-transparent bg-gradient-to-br from-white via-white/90 to-white/50 leading-tight pb-2 mb-2 inline-block relative -ml-1",
                                                    style: {
                                                        fontSize: 'clamp(4rem, 6vw, 5.5rem)'
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedStat, {
                                                        text: stat.value
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Experience.tsx",
                                                        lineNumber: 113,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Experience.tsx",
                                                    lineNumber: 109,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-brand-accent text-[11px] sm:text-xs font-bold leading-relaxed uppercase tracking-widest max-w-[160px]",
                                                    children: stat.unit
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Experience.tsx",
                                                    lineNumber: 117,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Experience.tsx",
                                            lineNumber: 101,
                                            columnNumber: 33
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Experience.tsx",
                                    lineNumber: 99,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Experience.tsx",
                            lineNumber: 86,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 relative z-30 w-full flex flex-col justify-center px-6 sm:px-12 xl:px-0 py-12 xl:py-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute top-1/2 right-0 w-64 h-64 bg-brand-dark/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Experience.tsx",
                                    lineNumber: 131,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full max-w-2xl xl:ml-auto -mt-4 sm:-mt-8 xl:-mt-12",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: "hidden",
                                            whileInView: "show",
                                            viewport: {
                                                once: true,
                                                margin: "-10%"
                                            },
                                            variants: {
                                                hidden: {
                                                    opacity: 0
                                                },
                                                show: {
                                                    opacity: 1,
                                                    transition: {
                                                        staggerChildren: 0.15
                                                    }
                                                }
                                            },
                                            className: "mb-12 xl:mb-16 relative z-10",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
                                                variants: fadeUpItem,
                                                className: "text-[#2B3042]/80 text-[15px] sm:text-[17px] font-medium tracking-wide leading-relaxed",
                                                children: "We deliver comprehensive, technology-driven, and client-focused financial solutions designed to elevate your business trajectory."
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Experience.tsx",
                                                lineNumber: 146,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Experience.tsx",
                                            lineNumber: 136,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col sm:flex-row sm:items-end justify-between gap-10 xl:gap-0 w-full relative z-10",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    variants: fadeUpItem,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                        className: "flex -space-x-4 cursor-pointer py-2 sm:pl-2",
                                                        initial: "rest",
                                                        whileHover: "hover",
                                                        animate: "rest",
                                                        variants: {
                                                            rest: {
                                                                transition: {
                                                                    staggerChildren: 0.05,
                                                                    staggerDirection: -1
                                                                }
                                                            },
                                                            hover: {
                                                                transition: {
                                                                    staggerChildren: 0.05,
                                                                    staggerDirection: 1
                                                                }
                                                            }
                                                        },
                                                        children: [
                                                            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=120&auto=format&fit=crop&crop=faces",
                                                            "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=120&auto=format&fit=crop&crop=faces",
                                                            "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=120&auto=format&fit=crop&crop=faces"
                                                        ].map((src, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                className: "w-14 h-14 xl:w-16 xl:h-16 rounded-full border-[3px] border-[#FAFAFB] shadow-md overflow-hidden relative origin-left",
                                                                style: {
                                                                    zIndex: 3 - i
                                                                },
                                                                variants: {
                                                                    rest: {
                                                                        x: 0,
                                                                        scale: 1
                                                                    },
                                                                    hover: {
                                                                        x: i * 20,
                                                                        scale: 1.1
                                                                    }
                                                                },
                                                                transition: {
                                                                    type: "spring",
                                                                    stiffness: 400,
                                                                    damping: 25
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                    src: src,
                                                                    alt: "",
                                                                    className: "w-full h-full object-cover"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Experience.tsx",
                                                                    lineNumber: 180,
                                                                    columnNumber: 49
                                                                }, this)
                                                            }, i, false, {
                                                                fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Experience.tsx",
                                                                lineNumber: 170,
                                                                columnNumber: 45
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Experience.tsx",
                                                        lineNumber: 155,
                                                        columnNumber: 37
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Experience.tsx",
                                                    lineNumber: 154,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    variants: fadeUpItem,
                                                    className: "relative flex justify-end w-full sm:w-auto mt-4 sm:mt-0",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative inline-flex flex-row items-center pr-[3.75rem]",
                                                        style: {
                                                            filter: "url(#goo-experience)"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                className: "absolute hidden",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                                                                        id: "goo-experience",
                                                                        x: "-50%",
                                                                        y: "-50%",
                                                                        width: "200%",
                                                                        height: "200%",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feGaussianBlur", {
                                                                                in: "SourceGraphic",
                                                                                stdDeviation: "8",
                                                                                result: "blur"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Experience.tsx",
                                                                                lineNumber: 193,
                                                                                columnNumber: 53
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feColorMatrix", {
                                                                                in: "blur",
                                                                                mode: "matrix",
                                                                                values: "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -9",
                                                                                result: "goo"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Experience.tsx",
                                                                                lineNumber: 194,
                                                                                columnNumber: 53
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feComposite", {
                                                                                in: "SourceGraphic",
                                                                                in2: "goo",
                                                                                operator: "atop"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Experience.tsx",
                                                                                lineNumber: 200,
                                                                                columnNumber: 53
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Experience.tsx",
                                                                        lineNumber: 192,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Experience.tsx",
                                                                    lineNumber: 191,
                                                                    columnNumber: 45
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Experience.tsx",
                                                                lineNumber: 190,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/about",
                                                                className: "group relative inline-flex items-center justify-center cursor-pointer",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "absolute right-0 top-0 bottom-0 my-auto h-[3.25rem] w-[3.25rem] rounded-lg bg-brand-dark flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:translate-x-[3.75rem] z-0",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                                            size: 20,
                                                                            className: "text-white",
                                                                            strokeWidth: 2
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Experience.tsx",
                                                                            lineNumber: 211,
                                                                            columnNumber: 49
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Experience.tsx",
                                                                        lineNumber: 210,
                                                                        columnNumber: 45
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "relative z-10 rounded-lg bg-brand-dark px-8 py-4 flex items-center justify-center text-white font-medium text-sm shadow-[0_4px_20px_rgba(0,0,0,0.05)] whitespace-nowrap border border-white/10",
                                                                        children: "About us"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Experience.tsx",
                                                                        lineNumber: 215,
                                                                        columnNumber: 45
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Experience.tsx",
                                                                lineNumber: 205,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Experience.tsx",
                                                        lineNumber: 188,
                                                        columnNumber: 37
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Experience.tsx",
                                                    lineNumber: 187,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Experience.tsx",
                                            lineNumber: 151,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Experience.tsx",
                                    lineNumber: 133,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Experience.tsx",
                            lineNumber: 128,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Experience.tsx",
                    lineNumber: 81,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    variants: fadeUpItem,
                    initial: "hidden",
                    whileInView: "show",
                    viewport: {
                        once: true,
                        margin: "-10%"
                    },
                    className: "w-full bg-brand-dark py-[clamp(1.2rem,2vw,1.8125rem)] xl:mt-[-1.8125rem]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full max-w-[1920px] mx-auto px-6 sm:px-12 xl:px-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
                                    alt: "Corporate Building Setup",
                                    className: "w-full h-full object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Experience.tsx",
                                    lineNumber: 238,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-[#005A8D]/40 mix-blend-multiply pointer-events-none"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Experience.tsx",
                                    lineNumber: 244,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Experience.tsx",
                            lineNumber: 237,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Experience.tsx",
                        lineNumber: 236,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Experience.tsx",
                    lineNumber: 229,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Experience.tsx",
            lineNumber: 73,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Experience.tsx",
        lineNumber: 69,
        columnNumber: 9
    }, this);
}
}),
"[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Services.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Services
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/node_modules/lucide-react/dist/esm/icons/building-2.js [app-ssr] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-ssr] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-ssr] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const services = [
    {
        title: 'Accounts, Audit & Income Tax',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
            size: 24
        }, void 0, false, {
            fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Services.tsx",
            lineNumber: 9,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        color: 'from-[#E8F0F8] to-[#F4F6F9]',
        itemColor: 'bg-brand-accent',
        image: '/Accounts ordered and income tax - Copy.png',
        items: [
            'Preparation & Finalisation of Accounts',
            'Income Tax Return Filing & Tax Planning',
            'TDS Returns',
            'Statutory Audits',
            'Internal Audits',
            'Tax Audits',
            'Social Audits',
            'Scrutiny Assessment & Appeals'
        ]
    },
    {
        title: 'GST & Corporate Laws',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
            size: 24
        }, void 0, false, {
            fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Services.tsx",
            lineNumber: 26,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        color: 'from-[#DCE8F0] to-[#EFF3F7]',
        itemColor: 'bg-brand-dark',
        image: '/GST and corporate.jpg',
        items: [
            'GST Registration, Returns, and Litigation',
            'Company Formation & Striking Off',
            'Partnerships & LLP Formation',
            'Trust Formation & Advisory',
            'ROC Filings',
            'GST Annual Audits',
            'Notices & Representation',
            'Corporate Governance'
        ]
    },
    {
        title: 'Registration Services',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
            size: 24
        }, void 0, false, {
            fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Services.tsx",
            lineNumber: 43,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        color: 'from-[#E3EDF5] to-[#F2F5F8]',
        itemColor: 'bg-[#2A648F]',
        image: '/Registration services.jpg',
        description: 'End-to-end licensing and statutory compliance.',
        items: [
            'Trade License / Shop & Establishment',
            'MSME / FSSAI / RERA / IEC',
            'Digital Signature & Professional Tax',
            'Trade Mark Registration'
        ]
    },
    {
        title: 'Other Services',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"], {
            size: 24
        }, void 0, false, {
            fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Services.tsx",
            lineNumber: 57,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        color: 'from-[#EAF0F6] to-[#F5F7FA]',
        itemColor: 'bg-[#3B82B8]',
        image: '/Other services.jpg',
        description: 'Business Valuation & Financing.',
        items: [
            'Business Valuation',
            'Bank Funding / Project Financing',
            'SOP Preparation & Implementation',
            'PF/ ESI Returns and Filings',
            'Accounting for International Clients'
        ]
    }
];
function Services() {
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "services",
        className: "pt-0 pb-24 lg:pb-32 bg-white text-brand-dark overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20 mt-8 lg:mt-16",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: true,
                        margin: "-100px"
                    },
                    transition: {
                        duration: 0.6,
                        ease: "easeOut"
                    },
                    className: "mb-10 lg:mb-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm font-bold tracking-widest uppercase text-brand-accent mb-4 block",
                            children: "Our Services"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Services.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-4xl sm:text-5xl lg:text-6xl font-heading font-semibold leading-[1.1] text-brand-dark",
                            children: [
                                "Tailored financial solutions ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Services.tsx",
                                    lineNumber: 91,
                                    columnNumber: 42
                                }, this),
                                " for your trajectory."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Services.tsx",
                            lineNumber: 90,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Services.tsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: "hidden",
                    whileInView: "visible",
                    viewport: {
                        once: true,
                        margin: "-10%"
                    },
                    variants: {
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.15,
                                delayChildren: 0.1
                            }
                        }
                    },
                    className: "flex flex-col lg:flex-row w-full h-[800px] lg:h-[500px] xl:h-[550px] gap-3 lg:gap-4 xl:gap-6",
                    onMouseLeave: ()=>setActiveIndex(null),
                    children: services.map((service, index)=>{
                        const isActive = activeIndex === index;
                        const isAnyActive = activeIndex !== null;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            variants: {
                                hidden: {
                                    opacity: 0,
                                    y: 50,
                                    scale: 0.95
                                },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    scale: 1,
                                    transition: {
                                        duration: 0.8,
                                        ease: [
                                            0.16,
                                            1,
                                            0.3,
                                            1
                                        ]
                                    }
                                }
                            },
                            onMouseEnter: ()=>setActiveIndex(index),
                            onClick: ()=>setActiveIndex(index),
                            layout: true,
                            className: `
                  relative overflow-hidden rounded-[2rem] lg:rounded-[2.5rem] cursor-pointer
                  transition-[flex,box-shadow] duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] transform-gpu
                  shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-gray-100/50 bg-gradient-to-br ${service.color}
                  flex flex-col
                  ${isAnyActive ? isActive ? 'flex-[10] shadow-xl' : 'flex-[1.5] lg:flex-1 hover:brightness-95' : 'flex-1 hover:shadow-md'}
                `,
                            children: [
                                service.image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 z-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: service.image,
                                                alt: service.title,
                                                className: `w-full h-full object-cover transition-transform duration-700 ease-out transform-gpu will-change-transform ${isActive ? 'scale-105' : 'scale-100'}`
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Services.tsx",
                                                lineNumber: 143,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Services.tsx",
                                            lineNumber: 142,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 z-0 bg-brand-dark opacity-50 mix-blend-multiply transition-opacity duration-700 transform-gpu pointer-events-none"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Services.tsx",
                                            lineNumber: 150,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `absolute inset-0 z-0 bg-gradient-to-br ${service.color} opacity-40 mix-blend-color transform-gpu pointer-events-none`
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Services.tsx",
                                            lineNumber: 152,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `
                    absolute inset-0 flex flex-col items-center justify-center p-6 lg:p-8 transition-opacity transform-gpu will-change-opacity
                    ${!isAnyActive ? 'opacity-100 duration-500 delay-300' : 'opacity-0 duration-150 pointer-events-none'}
                  `,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-14 h-14 lg:w-16 lg:h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-white shadow-sm mb-6 shrink-0 border border-white/20",
                                            children: service.icon
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Services.tsx",
                                            lineNumber: 167,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl lg:text-2xl xl:text-3xl font-heading font-semibold text-white text-center leading-snug drop-shadow-md",
                                            children: service.title
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Services.tsx",
                                            lineNumber: 170,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Services.tsx",
                                    lineNumber: 161,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `
                    absolute inset-0 flex flex-col items-center justify-center p-4 lg:p-6 transition-opacity transform-gpu will-change-opacity
                    ${isAnyActive && !isActive ? 'opacity-100 duration-500 delay-300' : 'opacity-0 duration-150 pointer-events-none'}
                  `,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-sm flex items-center justify-center text-white mb-6 shrink-0",
                                            children: service.icon
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Services.tsx",
                                            lineNumber: 186,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg lg:text-xl font-heading font-medium tracking-wide text-white whitespace-nowrap hidden lg:block drop-shadow-md",
                                            style: {
                                                writingMode: 'vertical-rl',
                                                transform: 'rotate(180deg)'
                                            },
                                            children: service.title
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Services.tsx",
                                            lineNumber: 189,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-sm font-heading font-medium text-white text-center lg:hidden drop-shadow-md",
                                            children: service.title
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Services.tsx",
                                            lineNumber: 195,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Services.tsx",
                                    lineNumber: 180,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `
                    absolute inset-0 w-full h-full p-8 lg:p-10 xl:p-14 flex flex-col xl:flex-row gap-8 xl:gap-12
                    transition-opacity transform-gpu will-change-opacity
                    ${isActive ? 'opacity-100 duration-500 delay-300' : 'opacity-0 duration-150 pointer-events-none'}
                  `,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 flex flex-col justify-start",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center text-white shadow-sm mb-6 lg:mb-8",
                                                    children: service.icon
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Services.tsx",
                                                    lineNumber: 214,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-3xl lg:text-4xl xl:text-5xl font-heading font-semibold text-white leading-tight mb-4 drop-shadow-md",
                                                    children: service.title
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Services.tsx",
                                                    lineNumber: 217,
                                                    columnNumber: 21
                                                }, this),
                                                service.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-white/80 text-base lg:text-lg mb-8 max-w-sm drop-shadow-sm",
                                                    children: service.description
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Services.tsx",
                                                    lineNumber: 221,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "#contact",
                                                    className: "mt-auto hidden xl:inline-flex items-center gap-2 text-sm font-medium bg-white text-brand-dark px-6 py-3 rounded-full hover:bg-white/90 transition-all w-max shadow-md",
                                                    children: [
                                                        "Explore ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                            size: 16
                                                        }, void 0, false, {
                                                            fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Services.tsx",
                                                            lineNumber: 230,
                                                            columnNumber: 31
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Services.tsx",
                                                    lineNumber: 226,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Services.tsx",
                                            lineNumber: 213,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 bg-brand-dark/40 backdrop-blur-md border border-white/20 rounded-3xl p-6 lg:p-8 flex flex-col justify-center h-full max-h-min overflow-y-auto custom-scrollbar shadow-lg",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "space-y-4",
                                                children: service.items.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "flex items-start gap-4 text-white/90 text-[15px] lg:text-base font-medium leading-relaxed",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `w-2 h-2 rounded-full ${service.itemColor} mt-2 shrink-0 shadow-sm ring-2 ring-white/30`
                                                            }, void 0, false, {
                                                                fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Services.tsx",
                                                                lineNumber: 239,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: item
                                                            }, void 0, false, {
                                                                fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Services.tsx",
                                                                lineNumber: 240,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, i, true, {
                                                        fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Services.tsx",
                                                        lineNumber: 238,
                                                        columnNumber: 25
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Services.tsx",
                                                lineNumber: 236,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Services.tsx",
                                            lineNumber: 235,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#contact",
                                            className: "xl:hidden mt-8 inline-flex items-center justify-center gap-2 text-sm font-medium bg-white text-brand-dark px-6 py-3 rounded-full shadow-md hover:bg-white/90 transition-all",
                                            children: [
                                                "Explore ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Services.tsx",
                                                    lineNumber: 250,
                                                    columnNumber: 29
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Services.tsx",
                                            lineNumber: 246,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Services.tsx",
                                    lineNumber: 205,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Services.tsx",
                            lineNumber: 117,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Services.tsx",
                    lineNumber: 96,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Services.tsx",
            lineNumber: 77,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Services.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
}),
"[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Clientele.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Clientele
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
"use client";
;
;
const clients = [
    {
        id: '01',
        title: 'Individuals',
        description: 'Personalized wealth management, tax return filing, and strategic investment structuring.'
    },
    {
        id: '02',
        title: 'Partnership Firms',
        description: 'Financial structuring, tax planning, and statutory compliance for joint ventures.'
    },
    {
        id: '03',
        title: 'LLP (Limited Liability Partnerships)',
        description: 'Governance, compliance, and strategic advisory tailored for limited liability structures.'
    },
    {
        id: '04',
        title: 'Corporates',
        description: 'Comprehensive compliance, audit, and strategic financial advisory for enterprises.'
    },
    {
        id: '05',
        title: 'Trusts / NGOs',
        description: 'Governance, specialized auditing, and strict regulatory compliance for non-profits.'
    },
    {
        id: '06',
        title: 'Residential Societies',
        description: 'Accounting, transparent auditing, and compliance management for housing societies.'
    }
];
function Clientele() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "clientele",
        className: "py-24 lg:py-32 bg-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: true,
                        margin: "-100px"
                    },
                    transition: {
                        duration: 0.6,
                        ease: "easeOut"
                    },
                    className: "mb-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm font-bold tracking-widest uppercase text-brand-accent mb-6 block",
                            children: "Clientele"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Clientele.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-4xl sm:text-5xl lg:text-6xl font-heading font-semibold leading-[1.1] text-brand-dark max-w-3xl",
                            children: "Partnering with diverse entities to ensure enduring financial excellence."
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Clientele.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Clientele.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
                    children: clients.map((client, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 30
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true,
                                margin: "-50px"
                            },
                            transition: {
                                duration: 0.5,
                                delay: index * 0.1,
                                ease: "easeOut"
                            },
                            className: "folder-shape p-8 bg-brand-light border border-brand-dark/5 hover:border-brand-accent/30 transition-colors group flex flex-col h-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-4xl font-heading font-bold text-brand-dark/10 mb-6 group-hover:text-brand-accent/20 transition-colors",
                                    children: client.id
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Clientele.tsx",
                                    lineNumber: 65,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-heading font-semibold text-brand-dark mb-4",
                                    children: client.title
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Clientele.tsx",
                                    lineNumber: 68,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-brand-dark/70 text-sm leading-relaxed",
                                    children: client.description
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Clientele.tsx",
                                    lineNumber: 71,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, client.id, true, {
                            fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Clientele.tsx",
                            lineNumber: 57,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Clientele.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Clientele.tsx",
            lineNumber: 39,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Clientele.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
}),
"[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Team.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Team
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
"use client";
;
;
const team = [
    {
        name: 'CA Komal Bhotika',
        role: 'Partner',
        description: 'Chartered Accountant | GST & Taxation Expert | Independent Director',
        image: 'https://picsum.photos/seed/komal/400/500?blur=1'
    },
    {
        name: 'CA Richa Sureka',
        role: 'Partner',
        description: 'Chartered Accountant | Banking & Financial Advisory Expert',
        image: 'https://picsum.photos/seed/richa/400/500?blur=1'
    }
];
function Team() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "team",
        className: "py-24 lg:py-32 bg-brand-light",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: true,
                        margin: "-100px"
                    },
                    transition: {
                        duration: 0.6,
                        ease: "easeOut"
                    },
                    className: "mb-16 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm font-bold tracking-widest uppercase text-brand-accent mb-6 block",
                            children: "Our Team"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Team.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-4xl sm:text-5xl lg:text-6xl font-heading font-semibold leading-[1.1] text-brand-dark max-w-3xl mx-auto",
                            children: "Led by dynamic finance professionals with a shared vision."
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Team.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Team.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid md:grid-cols-2 gap-12 max-w-4xl mx-auto",
                    children: team.map((member, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 30
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true,
                                margin: "-50px"
                            },
                            transition: {
                                duration: 0.6,
                                delay: index * 0.2,
                                ease: "easeOut"
                            },
                            className: "group",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative overflow-hidden rounded-2xl mb-6 aspect-[4/5]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: member.image,
                                            alt: member.name,
                                            referrerPolicy: "no-referrer",
                                            className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Team.tsx",
                                            lineNumber: 49,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Team.tsx",
                                            lineNumber: 55,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Team.tsx",
                                    lineNumber: 48,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-2xl font-heading font-semibold text-brand-dark mb-2",
                                            children: member.name
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Team.tsx",
                                            lineNumber: 58,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-brand-accent font-medium mb-3",
                                            children: member.role
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Team.tsx",
                                            lineNumber: 61,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-brand-dark/70 text-sm leading-relaxed max-w-xs mx-auto",
                                            children: member.description
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Team.tsx",
                                            lineNumber: 64,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Team.tsx",
                                    lineNumber: 57,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, member.name, true, {
                            fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Team.tsx",
                            lineNumber: 40,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Team.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Team.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Team.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
}),
"[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Contact.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Contact
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/node_modules/lucide-react/dist/esm/icons/mail.js [app-ssr] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/node_modules/lucide-react/dist/esm/icons/phone.js [app-ssr] (ecmascript) <export default as Phone>");
"use client";
;
;
function Contact() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "contact",
        className: "py-24 lg:py-32 bg-brand-dark text-white relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-br from-brand-accent/20 to-transparent opacity-50"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Contact.tsx",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid lg:grid-cols-2 gap-16 lg:gap-24",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-bold tracking-widest uppercase text-brand-accent mb-6 block",
                                    children: "Contact Us"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Contact.tsx",
                                    lineNumber: 12,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-5xl sm:text-6xl lg:text-7xl font-heading font-semibold leading-[1.1] text-white mb-8",
                                    children: [
                                        "Let's make an ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-brand-accent",
                                            children: "action plan"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Contact.tsx",
                                            lineNumber: 16,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Contact.tsx",
                                    lineNumber: 15,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg text-white/70 mb-12 max-w-md",
                                    children: "Don't like the forms? Drop us a line via email or give us a call."
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Contact.tsx",
                                    lineNumber: 18,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "mailto:cakomalbajaj@gmail.com",
                                            className: "flex items-center gap-4 group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-colors",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                        size: 20
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Contact.tsx",
                                                        lineNumber: 25,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Contact.tsx",
                                                    lineNumber: 24,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-white/50 mb-1",
                                                            children: "Email us"
                                                        }, void 0, false, {
                                                            fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Contact.tsx",
                                                            lineNumber: 28,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-lg font-medium text-white group-hover:text-brand-accent transition-colors",
                                                            children: "cakomalbajaj@gmail.com"
                                                        }, void 0, false, {
                                                            fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Contact.tsx",
                                                            lineNumber: 29,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Contact.tsx",
                                                    lineNumber: 27,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Contact.tsx",
                                            lineNumber: 23,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "tel:+919876543210",
                                            className: "flex items-center gap-4 group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-colors",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                        size: 20
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Contact.tsx",
                                                        lineNumber: 37,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Contact.tsx",
                                                    lineNumber: 36,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-white/50 mb-1",
                                                            children: "Call us"
                                                        }, void 0, false, {
                                                            fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Contact.tsx",
                                                            lineNumber: 40,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-lg font-medium text-white group-hover:text-brand-accent transition-colors",
                                                            children: "+91-9876543210"
                                                        }, void 0, false, {
                                                            fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Contact.tsx",
                                                            lineNumber: 41,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Contact.tsx",
                                                    lineNumber: 39,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Contact.tsx",
                                            lineNumber: 35,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-brand-accent shrink-0",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                        size: 20
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Contact.tsx",
                                                        lineNumber: 49,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Contact.tsx",
                                                    lineNumber: 48,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-white/50 mb-1",
                                                            children: "Visit us"
                                                        }, void 0, false, {
                                                            fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Contact.tsx",
                                                            lineNumber: 52,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-lg font-medium text-white leading-relaxed max-w-xs",
                                                            children: "123 Business Avenue, Suite 405, Connaught Place, New Delhi 110001"
                                                        }, void 0, false, {
                                                            fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Contact.tsx",
                                                            lineNumber: 53,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Contact.tsx",
                                                    lineNumber: 51,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Contact.tsx",
                                            lineNumber: 47,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Contact.tsx",
                                    lineNumber: 22,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Contact.tsx",
                            lineNumber: 11,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-3xl p-8 sm:p-12 shadow-2xl relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute -top-6 -right-6 w-32 h-32 bg-brand-accent/10 rounded-full blur-2xl -z-10"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Contact.tsx",
                                    lineNumber: 63,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    className: "space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid sm:grid-cols-2 gap-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "name",
                                                            className: "block text-sm font-medium text-brand-dark/70 mb-2",
                                                            children: "Full Name"
                                                        }, void 0, false, {
                                                            fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Contact.tsx",
                                                            lineNumber: 68,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            id: "name",
                                                            className: "w-full bg-brand-light border border-brand-dark/10 rounded-xl px-4 py-3 text-brand-dark placeholder:text-brand-dark/30 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent transition-all",
                                                            placeholder: "John Doe"
                                                        }, void 0, false, {
                                                            fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Contact.tsx",
                                                            lineNumber: 71,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Contact.tsx",
                                                    lineNumber: 67,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "email",
                                                            className: "block text-sm font-medium text-brand-dark/70 mb-2",
                                                            children: "Email Address"
                                                        }, void 0, false, {
                                                            fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Contact.tsx",
                                                            lineNumber: 79,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "email",
                                                            id: "email",
                                                            className: "w-full bg-brand-light border border-brand-dark/10 rounded-xl px-4 py-3 text-brand-dark placeholder:text-brand-dark/30 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent transition-all",
                                                            placeholder: "john@example.com"
                                                        }, void 0, false, {
                                                            fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Contact.tsx",
                                                            lineNumber: 82,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Contact.tsx",
                                                    lineNumber: 78,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Contact.tsx",
                                            lineNumber: 66,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "message",
                                                    className: "block text-sm font-medium text-brand-dark/70 mb-2",
                                                    children: "Your Message"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Contact.tsx",
                                                    lineNumber: 92,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    id: "message",
                                                    rows: 4,
                                                    className: "w-full bg-brand-light border border-brand-dark/10 rounded-xl px-4 py-3 text-brand-dark placeholder:text-brand-dark/30 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent transition-all resize-none",
                                                    placeholder: "How can we help you?"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Contact.tsx",
                                                    lineNumber: 95,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Contact.tsx",
                                            lineNumber: 91,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "checkbox",
                                                    id: "privacy",
                                                    className: "w-5 h-5 rounded border-brand-dark/20 text-brand-accent focus:ring-brand-accent/50"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Contact.tsx",
                                                    lineNumber: 104,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "privacy",
                                                    className: "text-sm text-brand-dark/60",
                                                    children: [
                                                        "I agree with the ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "#",
                                                            className: "text-brand-accent hover-underline-animation",
                                                            children: "Privacy Policy"
                                                        }, void 0, false, {
                                                            fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Contact.tsx",
                                                            lineNumber: 110,
                                                            columnNumber: 36
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Contact.tsx",
                                                    lineNumber: 109,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Contact.tsx",
                                            lineNumber: 103,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            className: "w-full bg-brand-dark text-white rounded-xl px-8 py-4 font-medium hover:bg-brand-accent transition-colors flex items-center justify-center gap-2 group",
                                            children: [
                                                "Send Message",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$1abcd$2d$__CLIENT__WORK$2f$KBRS__2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                    size: 18,
                                                    className: "group-hover:translate-x-1 transition-transform"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Contact.tsx",
                                                    lineNumber: 119,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Contact.tsx",
                                            lineNumber: 114,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Contact.tsx",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Contact.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Contact.tsx",
                    lineNumber: 10,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Contact.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Documents/1abcd- CLIENT WORK/KBRS 2.0/src/components/Contact.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=OneDrive_Documents_1abcd-%20CLIENT%20WORK_KBRS%202_0_src_components_bc09d165._.js.map