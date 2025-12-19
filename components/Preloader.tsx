import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
    onLoadingComplete?: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onLoadingComplete }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            if (onLoadingComplete) {
                onLoadingComplete();
            }
        }, 2800); // Duration of the splash screen

        return () => clearTimeout(timer);
    }, [onLoadingComplete]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        transition: { duration: 0.8, ease: "easeInOut" }
                    }}
                    className="fixed inset-0 z-[9999] bg-[#111714] flex flex-col items-center justify-center p-6 text-center"
                >
                    <div className="relative">
                        {/* Animated Logo/Icon Backdrop */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{
                                scale: [0.8, 1.1, 1],
                                opacity: 1
                            }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full"
                        />

                        {/* Icon */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative mb-8"
                        >
                            <span className="material-symbols-outlined text-6xl text-primary filled">diamond</span>
                        </motion.div>

                        {/* Text Content */}
                        <div className="relative overflow-hidden">
                            <motion.h2
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                                className="text-2xl md:text-3xl font-serif text-white mb-2"
                            >
                                A tecnologia do tempo,
                            </motion.h2>
                        </div>

                        <div className="relative overflow-hidden">
                            <motion.h2
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                                className="text-2xl md:text-3xl font-serif"
                            >
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-accent to-[#DAA520] italic">a nobreza do ouro.</span>
                            </motion.h2>
                        </div>

                        {/* Loading Bar */}
                        <div className="mt-12 w-48 h-[2px] bg-white/5 rounded-full overflow-hidden mx-auto">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 2, ease: "easeInOut" }}
                                className="h-full bg-primary"
                            />
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;
