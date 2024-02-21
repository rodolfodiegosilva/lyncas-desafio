export class ImageModel {
    data:    Data | undefined;
    success: boolean | undefined;
    status:  number | undefined;
}

export class Data {
    id:            string | undefined;
    title:         null | undefined;
    description:   null | undefined;
    datetime:      number | undefined;
    type:          string | undefined;
    animated:      boolean | undefined;
    width:         number | undefined;
    height:        number | undefined;
    size:          number | undefined;
    views:         number | undefined;
    bandwidth:     number | undefined;
    vote:          null | undefined;
    favorite:      boolean | undefined;
    nsfw:          null | undefined;
    section:       null | undefined;
    account_url:   null | undefined;
    account_id:    number | undefined;
    is_ad:         boolean | undefined;
    in_most_viral: boolean | undefined;
    tags:          any[] | undefined;
    ad_type:       number | undefined;
    ad_url:        string | undefined;
    in_gallery:    boolean | undefined;
    deletehash:    string | undefined;
    name:          string | undefined;
    link:          string | undefined;
}