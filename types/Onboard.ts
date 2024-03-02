export type Onboard = {
    object:           string;
    id:               string;
    created_time:     string;
    last_edited_time: string;
    created_by:       TedBy;
    last_edited_by:   TedBy;
    cover:            null;
    icon:             null;
    parent:           Parent;
    archived:         boolean;
    properties:       Properties;
    url:              string;
    public_url:       null;
}

export type TedBy = {
    object: string;
    id:     string;
}

export type Parent = {
    type:        string;
    database_id: string;
}

export type Properties = {
    BuddyEmail:      BuddyEmail;
    NewEmployeeMail: NewEmployeeMail;
}

export type BuddyEmail = {
    id:    string;
    type:  string;
    email: string;
}

export type NewEmployeeMail = {
    id:    string;
    type:  string;
    title: Title[];
}

export type Title = {
    type:        string;
    text:        Text;
    annotations: Annotations;
    plain_text:  string;
    href:        null;
}

export type Annotations = {
    bold:          boolean;
    italic:        boolean;
    strikethrough: boolean;
    underline:     boolean;
    code:          boolean;
    color:         string;
}

export type Text = {
    content: string;
    link:    null;
}
