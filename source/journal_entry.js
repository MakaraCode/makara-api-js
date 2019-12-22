/* Makara API JS - Journal Entry Class */

class JournalEntry {

    constructor(
        publicId,
        created,
        creatingAgentId
    ) {
        this._publicId = publicId;
        this._created = created;
        this._creatingAgentId = creatingAgentId;
        return;
    }

    get publicId() { return this._publicId; }
    get created() { return this._created; }
    get creatingAgentId() { return this._creatingAgentId; }

    static decode(data) {
        return new JournalEntry(
            data['public_id'],
            MakaraTime.decode(data['created']),
            data['creating_agent_id']
        );
    }

}
