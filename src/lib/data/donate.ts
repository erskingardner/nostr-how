export interface DonationWay {
    titleKey: string;
    bodyKey: string;
    ctaKey: string;
    href: string;
    address?: string;
    newTab?: boolean;
}

export const donationWays: DonationWay[] = [
    {
        titleKey: "donatePage.zapTitle",
        bodyKey: "donatePage.zapBody",
        ctaKey: "donatePage.zapCta",
        href: "https://primal.net/jeffg",
        newTab: true,
    },
    {
        titleKey: "donatePage.lightningTitle",
        bodyKey: "donatePage.lightningBody",
        ctaKey: "donatePage.lightningCta",
        href: "lightning:erskingardner@getalby.com",
        address: "erskingardner@getalby.com",
    },
    {
        titleKey: "donatePage.supportTitle",
        bodyKey: "donatePage.supportBody",
        ctaKey: "donatePage.supportCta",
        href: "https://primal.net/jeffg",
        newTab: true,
    },
];
