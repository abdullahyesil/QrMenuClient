export interface MenuItem {
    id?: string;
    name: string;
    creatorId: string;
    description: string;
    qrCodeUrl: string;
    link: string;
}

export interface Menu {
    menus: MenuItem[];
}