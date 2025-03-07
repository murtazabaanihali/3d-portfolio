import { useRef, useState } from "react";
import { ArrowUpRight, Check, Mail } from "lucide-react";

import SectionWrapper from "./section-wrapper";
import { cn } from "../lib/utils";
import { styles } from "../styles";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { CONTACT_EMAIL, SOCIAL_LINKS } from "../lib/constants";
import { useCopyToClipboard } from "../lib/utils/hooks";

const Contact = () => {
    const formRef = useRef<any>();
    const { isCopied, copyToClipboard } = useCopyToClipboard({ timeout: 1000 });

    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = ({ target: { name, value } }: {
        target: {
            name: string, value: any
        }
    }) => {
        setForm((f) => ({ ...f, [name]: value }));
    };

    const encode = (str: string) => encodeURIComponent(str);

    const handleSubmit = (event: any) => {
        event?.preventDefault();
        const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encode("Want to Contact you")}&body=${encode(form.message)}`;
        window.open(mailtoUrl, "_blank");
        //@ts-ignore
        umami?.track('message-send', { ...form });
        setForm((prev) => ({ ...prev, name: "", email: "" }));
    };

    return (
        <div className="bg-black-200 rounded-xl py-5 max-w-4xl mx-auto">
            <div className="flex items-center justify-center flex-col">
                <div className="contact-container">
                    <h3 className={cn(styles.sectionHeadText, "md:text-[30px]")}>
                        Let's talk
                    </h3>
                    <p className="text-lg text-white-600 mt-3">
                        Whether you're looking to build a new website, mobile app, improving your existing platform, or bring a unique project to life, I'm here to help.
                    </p>

                    <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex-col space-y-7">
                        <div>
                            <Label htmlFor="name">Full Name</Label>
                            <Input
                                type="text"
                                name="name"
                                id="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                placeholder="ex., Muhammed Ali"
                                className="mt-1"
                            />
                        </div>
                        <div>
                            <Label htmlFor="email">Email Address</Label>
                            <Input
                                type="email"
                                name="email"
                                id="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                placeholder="ex., muhammedali@gmail.com"
                                className="mt-1"
                            />
                        </div>
                        <div>
                            <Label htmlFor="message">Your message</Label>
                            <Textarea
                                name="message"
                                id="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                placeholder="Share your thoughts or inquiries..."
                                className="mt-1"
                                rows={5}
                            />
                        </div>
                        <div className="text-center">
                            <Button type="submit" className="hover:opacity-80 cursor-pointer border border-black-300">
                                Send Message
                                <ArrowUpRight />
                            </Button>
                        </div>
                        <div className="flex items-center justify-center gap-3">
                            <Button type="button" size="icon" className="rounded-full cursor-pointer ring-1 ring-black-300" data-umami-event="email-copied" onClick={() => copyToClipboard(CONTACT_EMAIL)}>
                                {isCopied ? <Check size={16} /> : <Mail size={16} />}
                            </Button>
                            {SOCIAL_LINKS.map((item, i) => (
                                <a key={i} href={item.link} target="_blank" title={item.title}>
                                    <Button title={item.title} type="button" size={"icon"} className="rounded-full cursor-pointer ring-1 ring-black-300">
                                        <item.icon className="text-white" />
                                    </Button>
                                </a>
                            ))}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SectionWrapper(Contact, "contact");
