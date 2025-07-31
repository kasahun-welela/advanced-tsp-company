export interface ServiceDetails {
  subService: {
    organizationNeed: {
      organizationalDefinition: string;
      needs: Array<{
        title: string;
        description: string;
        _id: string;
      }>;
    };
    businessValue: {
      businessValueDefinition: string;
      values: Array<{
        title: string;
        description: string;
        _id: string;
      }>;
    };
    cta: {
      title: string;
      description: string;
    };
    subServiceName: string;
    slug: string;
    moto: string;
    definition: string;
    commitment: string;
    _id: string;
  };
}